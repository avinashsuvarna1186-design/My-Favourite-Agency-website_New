import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { format, addDays, isWeekend } from "date-fns";
import { CalendarDays, Clock, Loader2, CheckCircle2 } from "lucide-react";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const serviceTypes = [
  "Brand Identity",
  "Logo Design",
  "Website Design",
  "UI/UX Design",
  "Marketing Collateral",
  "Complete Rebrand",
  "Consultation Only",
];

export default function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    serviceType: "",
    notes: "",
  });
  const [bookingComplete, setBookingComplete] = useState(false);

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const dateStr = selectedDate ? format(selectedDate, "yyyy-MM-dd") : "";

  const { data: slotsData, isLoading: slotsLoading } = useQuery({
    queryKey: ["/api/booking/slots", dateStr],
    enabled: !!dateStr,
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: any) => {
      return apiRequest("POST", "/api/booking", data);
    },
    onSuccess: () => {
      setBookingComplete(true);
      toast({
        title: "Consultation Booked!",
        description: "Check your email for the calendar invitation.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Booking Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = () => {
    if (!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.serviceType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    bookingMutation.mutate({
      ...formData,
      date: dateStr,
      time: selectedTime,
    });
  };

  const resetAndClose = () => {
    setStep(1);
    setSelectedDate(undefined);
    setSelectedTime("");
    setFormData({ name: "", email: "", company: "", serviceType: "", notes: "" });
    setBookingComplete(false);
    onOpenChange(false);
  };

  const disabledDays = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today || isWeekend(date);
  };

  const availableSlots = (slotsData as any)?.slots || [];

  return (
    <Dialog open={open} onOpenChange={resetAndClose}>
      <DialogContent className="sm:max-w-[500px] bg-black/95 border-white/10 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            {bookingComplete ? "Booking Confirmed!" : "Book a Consultation"}
          </DialogTitle>
          <DialogDescription className="text-white/60">
            {bookingComplete 
              ? "You'll receive a calendar invitation shortly."
              : "Schedule a 30-minute discovery call with our team."
            }
          </DialogDescription>
        </DialogHeader>

        {bookingComplete ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            </div>
            <p className="text-white/80 mb-6">
              We've sent a calendar invitation to <strong className="text-white">{formData.email}</strong>
            </p>
            <p className="text-sm text-white/60 mb-6">
              {selectedDate && format(selectedDate, "EEEE, MMMM d, yyyy")} at {selectedTime}
            </p>
            <Button 
              onClick={resetAndClose}
              className="bg-[#E97451] hover:bg-[#E97451]/90 text-white"
              data-testid="button-close-booking"
            >
              Close
            </Button>
          </div>
        ) : (
          <div className="space-y-6 py-4">
            {step === 1 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white/80 mb-4">
                  <CalendarDays className="w-5 h-5 text-[#E97451]" />
                  <span className="font-medium">Select a Date</span>
                </div>
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={disabledDays}
                    fromDate={new Date()}
                    toDate={addDays(new Date(), 30)}
                    className="rounded-md border border-white/10 bg-white/5"
                    data-testid="calendar-booking"
                  />
                </div>
                <Button
                  onClick={() => setStep(2)}
                  disabled={!selectedDate}
                  className="w-full bg-[#E97451] hover:bg-[#E97451]/90 text-white"
                  data-testid="button-next-step"
                >
                  Continue
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white/80 mb-4">
                  <Clock className="w-5 h-5 text-[#E97451]" />
                  <span className="font-medium">
                    Select a Time - {selectedDate && format(selectedDate, "MMM d, yyyy")}
                  </span>
                </div>
                
                {slotsLoading ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="w-6 h-6 animate-spin text-[#E97451]" />
                  </div>
                ) : availableSlots.length === 0 ? (
                  <p className="text-center py-8 text-white/60">
                    No available slots for this date. Please select another date.
                  </p>
                ) : (
                  <div className="grid grid-cols-4 gap-2">
                    {availableSlots.map((slot: string) => (
                      <Button
                        key={slot}
                        variant={selectedTime === slot ? "default" : "outline"}
                        onClick={() => setSelectedTime(slot)}
                        className={selectedTime === slot 
                          ? "bg-[#E97451] text-white border-[#E97451]" 
                          : "border-white/20 text-white/80 hover:bg-white/10"
                        }
                        data-testid={`button-time-${slot}`}
                      >
                        {slot}
                      </Button>
                    ))}
                  </div>
                )}

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1 border-white/20 text-white/80"
                    data-testid="button-back"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    disabled={!selectedTime}
                    className="flex-1 bg-[#E97451] hover:bg-[#E97451]/90 text-white"
                    data-testid="button-next-details"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white/80">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                    data-testid="input-booking-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/80">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                    data-testid="input-booking-email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white/80">Company</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company (optional)"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                    data-testid="input-booking-company"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-white/80">Service Interest *</Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                  >
                    <SelectTrigger 
                      className="bg-white/5 border-white/20 text-white"
                      data-testid="select-booking-service"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      {serviceTypes.map((service) => (
                        <SelectItem 
                          key={service} 
                          value={service}
                          className="text-white hover:bg-white/10"
                        >
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-white/80">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about your project (optional)"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40 min-h-[80px]"
                    data-testid="textarea-booking-notes"
                  />
                </div>

                <div className="pt-2 flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setStep(2)}
                    className="flex-1 border-white/20 text-white/80"
                    data-testid="button-back-time"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={bookingMutation.isPending || !formData.name || !formData.email || !formData.serviceType}
                    className="flex-1 bg-[#E97451] hover:bg-[#E97451]/90 text-white"
                    data-testid="button-confirm-booking"
                  >
                    {bookingMutation.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Booking...
                      </>
                    ) : (
                      "Confirm Booking"
                    )}
                  </Button>
                </div>
              </div>
            )}

            {!bookingComplete && (
              <div className="flex justify-center gap-2 pt-2">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      step >= s ? "bg-[#E97451]" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
