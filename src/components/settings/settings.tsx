'use client';
import { useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { ThemeSwitcher } from '@/components/themes/theme-switcher';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure
} from "@heroui/react";

export default function Settings() {
  const searchParams = useSearchParams();
  const modal = searchParams.get('settings');
  const pathname = usePathname();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button
        className="hover:bg-gray-100 flex w-full px-4 py-2 text-sm text-gray-700"
        onClick={() => onOpen()}
      >
        Innstillinger
      </button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Innstillinger
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-2 gap-2">
                  Dark Mode
                  <div>
                    <ThemeSwitcher />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
