import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function EnhancedContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const animation = useScrollAnimation("fade-in", { delay: 100 });

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      toast({
        title: "Message received!",
        description: "Thanks for reaching out. We'll get back to you within 24 hours.",
      });
      
      const subject = encodeURIComponent("New Contact Form Submission");
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      );
      
      setTimeout(() => {
        window.open(`mailto:hello@myfavourite.agency?subject=${subject}&body=${body}`, '_blank');
      }, 500);
      
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try reaching us on WhatsApp instead.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-4 relative" data-testid="section-contact-form">
      <div className="max-w-3xl mx-auto">
        <div ref={animation.ref} className={animation.className}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Ready to Build Something Legendary?
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Drop us a line. We promise not to ghost you.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What do we call you?</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your awesome name"
                        {...field}
                        data-testid="input-name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Where can we reach you?</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@yourbrand.com"
                        {...field}
                        data-testid="input-email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What's brewing in your mind?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your project, dreams, or just say hi..."
                        className="min-h-[150px]"
                        {...field}
                        data-testid="input-message"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full text-lg"
                disabled={isSubmitting}
                data-testid="button-submit-contact"
              >
                {isSubmitting ? "Sending..." : "Let's Do This"}
              </Button>
            </form>
          </Form>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Prefer instant gratification?{" "}
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
                data-testid="link-whatsapp"
              >
                WhatsApp us
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
