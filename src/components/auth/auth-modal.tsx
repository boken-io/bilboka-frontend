'use client';
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure
} from "@heroui/react";
import { useRouter, usePathname } from 'next/navigation';
import AuthOptions, { Modes } from './auth-options';

export default function AuthModal(props: { mode: Modes }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const path = usePathname();

  function closeModal() {
    router.push(path, { scroll: false });
  }

  return (
    <Modal
      isOpen={true}
      placement="center"
      radius="sm"
      backdrop="blur"
      isKeyboardDismissDisabled={true}
      isDismissable={false}
      onOpenChange={onOpenChange}
      onClose={closeModal}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              <AuthOptions mode={props.mode} />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
