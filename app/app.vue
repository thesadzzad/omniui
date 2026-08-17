<template>
    <App>
        <div class="preview">
            <section class="group">
                <h2 class="group__title">Alert</h2>
                <Alert
                    variant="neutral"
                    title="Neutral"
                    dismissible
                    @dismiss="log"
                >
                    This is a neutral alert message.
                </Alert>

                <Alert
                    variant="info"
                    title="Info"
                    dismissible
                    @dismiss="log"
                >
                    Heads up, here's some helpful information.
                </Alert>

                <Alert
                    variant="success"
                    title="Success"
                    dismissible
                    @dismiss="log"
                >
                    Your changes were saved successfully.
                </Alert>

                <Alert
                    variant="warning"
                    title="Warning"
                    dismissible
                    @dismiss="log"
                >
                    Please review before continuing.
                </Alert>

                <Alert variant="error" title="Error" @dismiss="log">
                    Something went wrong, try again.
                </Alert>

                <Alert variant="success" title="No dismiss">
                    This alert has no dismiss button.
                </Alert>
            </section>

            <section class="group">
                <h2 class="group__title">Avatar</h2>
                <div class="avatars">
                    <Avatar
                        name="Ada Lovelace"
                        size="xs"
                        status="online"
                    />
                    <Avatar name="Alan Turing" size="sm" status="busy" />
                    <Avatar name="Grace Hopper" size="md" status="away" />
                    <Avatar
                        name="Katherine Johnson"
                        size="lg"
                        status="offline"
                    />
                    <Avatar name="Linus Torvalds" size="xl" />
                    <Avatar
                        src="https://i.pravatar.cc/100?img=12"
                        size="lg"
                        shape="square"
                        status="online"
                    />
                    <Avatar
                        name="Ring On"
                        size="md"
                        ring
                        status="online"
                    />
                    <Avatar
                        src="https://i.pravatar.cc/100?img=33"
                        size="lg"
                        shape="circle"
                        ring
                        status="busy"
                    />
                    <Avatar
                        name="Squircle Ring"
                        size="xl"
                        shape="squircle"
                        ring
                    />
                </div>
            </section>

            <section class="group">
                <h2 class="group__title">Avatar Group</h2>
                <AvatarGroup :max="4" size="lg">
                    <Avatar name="Ada Lovelace" />
                    <Avatar name="Alan Turing" />
                    <Avatar name="Grace Hopper" />
                    <Avatar name="Katherine Johnson" />
                    <Avatar src="https://i.pravatar.cc/100?img=12" />
                    <Avatar name="Linus Torvalds" />
                    <Avatar name="Margaret Hamilton" />
                </AvatarGroup>
            </section>

            <section class="group">
                <h2 class="group__title">Badge</h2>
                <div class="badges">
                    <Badge variant="neutral">Neutral</Badge>
                    <Badge variant="info">Info</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="error">Error</Badge>
                    <Badge variant="success" dot>Active</Badge>
                    <Badge variant="info" size="sm">Small</Badge>
                    <Badge variant="error" size="lg">Large</Badge>
                </div>
            </section>
        </div>
        <div style="height: 50vh"></div>
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

    .badges
        display: flex
        align-items: center
        flex-wrap: wrap
        gap: var(--space-sm)
</style>
