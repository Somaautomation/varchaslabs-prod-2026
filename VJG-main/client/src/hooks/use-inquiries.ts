import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertInquiry } from "../../../shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit inquiry");
      }
      
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Sent!",
        description: "We've received your message and will get back to you shortly.",
        variant: "default",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    }
  });
}
