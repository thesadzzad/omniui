<template>
    <App>
        <div class="preview">
            <section class="group">
                <h2 class="group__title">Alert</h2>
                <AtomsAlert
                    variant="neutral"
                    title="Neutral"
                    dismissible
                    @dismiss="log"
                >
                    This is a neutral alert message.
                </AtomsAlert>

                <AtomsAlert
                    variant="info"
                    title="Info"
                    dismissible
                    @dismiss="log"
                >
                    Heads up, here's some helpful information.
                </AtomsAlert>

                <AtomsAlert
                    variant="success"
                    title="Success"
                    dismissible
                    @dismiss="log"
                >
                    Your changes were saved successfully.
                </AtomsAlert>

                <AtomsAlert
                    variant="warning"
                    title="Warning"
                    dismissible
                    @dismiss="log"
                >
                    Please review before continuing.
                </AtomsAlert>

                <AtomsAlert variant="error" title="Error" @dismiss="log">
                    Something went wrong, try again.
                </AtomsAlert>

                <AtomsAlert variant="success" title="No dismiss">
                    This alert has no dismiss button.
                </AtomsAlert>
            </section>

            <section class="group">
                <h2 class="group__title">Avatar</h2>
                <div class="avatars">
                    <AtomsAvatar
                        name="Ada Lovelace"
                        size="xs"
                        status="online"
                    />
                    <AtomsAvatar
                        name="Alan Turing"
                        size="sm"
                        status="busy"
                    />
                    <AtomsAvatar
                        name="Grace Hopper"
                        size="md"
                        status="away"
                    />
                    <AtomsAvatar
                        name="Katherine Johnson"
                        size="lg"
                        status="offline"
                    />
                    <AtomsAvatar
                        name="Linus Torvalds"
                        size="xl"
                    />
                    <AtomsAvatar
                        src="https://i.pravatar.cc/100?img=12"
                        size="lg"
                        shape="square"
                        status="online"
                    />
                    <AtomsAvatar
                        name="Ring On"
                        size="md"
                        ring
                        status="online"
                    />
                    <AtomsAvatar
                        src="https://i.pravatar.cc/100?img=33"
                        size="lg"
                        shape="circle"
                        ring
                        status="busy"
                    />
                    <AtomsAvatar
                        name="Squircle Ring"
                        size="xl"
                        shape="squircle"
                        ring
                    />
                </div>
            </section>
        </div>
    </App>
</template>

<script setup lang="ts">
const log = (...args: unknown[]) => console.log("dismiss", ...args);
</script>

<style scoped lang="sass">
.preview
    display: flex
    flex-direction: column
    gap: var(--space-xl)
    max-width: 40rem
    margin: var(--space-xl) auto
    padding: 0 var(--space-md)

    .group
        display: flex
        flex-direction: column
        gap: var(--space-md)

        &__title
            font-size: 0.875rem
            font-weight: 600
            text-transform: uppercase
            letter-spacing: 0.05em
            color: var(--color-muted-fg)
            margin: 0

    .avatars
        display: flex
        align-items: center
        flex-wrap: wrap
        gap: var(--space-md)
</style>
