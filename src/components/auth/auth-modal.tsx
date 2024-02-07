'use client';
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure
} from '@nextui-org/react';
import { useRouter, usePathname } from 'next/navigation';
import CorbadoLogin, { Modes } from './auth-corbado';

export default function LoginModal(props: { mode: Modes }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const path = usePathname();

  function closeModal() {
    router.push(path);
  }

  return (
    <Modal
      isOpen={true}
      backdrop="blur"
      onOpenChange={onOpenChange}
      onClose={closeModal}
      size="lg"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody className="grid justify-center">
              <CorbadoLogin mode={props.mode} />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
