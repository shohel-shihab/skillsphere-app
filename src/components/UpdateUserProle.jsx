"use client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiUser } from "react-icons/bi";
import { authClient } from "@/lib/auth-client"
export function UpdateUserProle() {
    const handleUpdate = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.photo.value;
        await authClient.updateUser({
            name,
           image
        })
    }
    return (
        <Modal>
            <Button variant="secondary">Update Profile Info</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header className="text-center">
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground text-center flex items-center">
                                <BiUser className="size-5"></BiUser>
                            </Modal.Icon>
                            <Modal.Heading>Update Your Profile</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={handleUpdate} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="photo" type="url">
                                        <Label>Image URL</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit">Save</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}