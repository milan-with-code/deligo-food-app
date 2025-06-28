import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/~/components/ui/dialog";
import { Button } from "@/~/components/ui/button";
import { Text } from "@/~/components/ui/text";

interface Props {
  visible: boolean;
  onClose: () => void;
}

const ResetPasswordSuccessModal: React.FC<Props> = ({ visible, onClose }) => {
  return (
    <Dialog open={visible} onOpenChange={(isOpen) => !isOpen && onClose?.()}>
      <DialogContent className="mx-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-jakartaBold mb-3 text-center">
            Password Changed!
          </DialogTitle>
          <DialogDescription className="text-sm font-jakartaMedium mb-7 tracking-wider leading-5 text-doveGray text-center">
            Your password has been reset successfully. Please use it to log in.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button onPress={onClose}>
              <Text>Continue</Text>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ResetPasswordSuccessModal;
