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

                <Alert variant="info" title="Info" dismissible @dismiss="log">
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
                <h2 class="group__title">Banner</h2>
                <Banner variant="error" :duration="5000">
                    Something went wrong, try again.
                </Banner>
                <Banner
                    variant="info"
                    dismissible
                    :duration="4000"
                    @dismiss="log"
                >
                    A new version is available.
                </Banner>
                <Banner variant="success" :duration="3000">
                    Your changes were saved successfully.
                </Banner>
                <Banner
                    variant="warning"
                    dismissible
                    :duration="2000"
                    @dismiss="log"
                >
                    Please review before continuing.
                </Banner>
            </section>

            <section class="group">
                <h2 class="group__title">Avatar</h2>
                <div class="avatars">
                    <Avatar name="Ada Lovelace" size="xs" status="online" />
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
                    <Avatar name="Ring On" size="md" ring status="online" />
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

            <section class="group">
                <h2 class="group__title">Button</h2>
                <Stack direction="row" gap="sm" align="center">
                    <Button variant="neutral">Neutral</Button>
                    <Button variant="info">Info</Button>
                    <Button variant="success">Success</Button>
                    <Button variant="warning">Warning</Button>
                    <Button variant="error">Error</Button>
                </Stack>
                <Stack direction="row" gap="sm" align="center">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                    <Button disabled>Disabled</Button>
                </Stack>
            </section>

            <section class="group">
                <h2 class="group__title">Stack</h2>
                <Stack direction="col" gap="sm">
                    <Button variant="info">Row 1</Button>
                    <Button variant="success">Row 2</Button>
                    <Button variant="warning">Row 3</Button>
                </Stack>
                <Stack direction="row" gap="md" align="center" justify="between">
                    <Button variant="neutral">Left</Button>
                    <Button variant="neutral">Center</Button>
                    <Button variant="neutral">Right</Button>
                </Stack>
            </section>

            <section class="group">
                <h2 class="group__title">Progress</h2>
                <Stack direction="col" gap="sm">
                    <Progress :value="25" variant="info" />
                    <Progress :value="50" variant="success" />
                    <Progress :value="75" variant="warning" />
                    <Progress :value="100" variant="error" />
                    <Progress indeterminate variant="info" />
                    <Progress :value="60" size="lg" variant="success" />
                </Stack>
            </section>

            <section class="group">
                <h2 class="group__title">Switch</h2>
                <Stack direction="row" gap="md" align="center">
                    <Switch v-model="switches.info" variant="info" label="Info" />
                    <Switch v-model="switches.success" variant="success" label="Success" />
                    <Switch v-model="switches.warning" variant="warning" label="Warning" />
                    <Switch v-model="switches.error" variant="error" label="Error" />
                    <Switch v-model="switches.sm" size="sm" variant="info" label="Small" />
                    <Switch v-model="switches.lg" size="lg" variant="info" label="Large" />
                    <Switch :model-value="true" disabled variant="info" label="Disabled" />
                </Stack>
            </section>

            <section class="group">
                <h2 class="group__title">Radio</h2>
                <Stack direction="col" gap="sm" align="start">
                    <Radio v-model="radio" value="a" name="plan" label="Option A" />
                    <Radio v-model="radio" value="b" name="plan" label="Option B" variant="success" />
                    <Radio v-model="radio" value="c" name="plan" label="Option C" variant="warning" />
                    <Radio v-model="radio" value="d" name="plan" label="Disabled" disabled />
                    <Radio v-model="radio" value="e" name="plan" size="lg" label="Large" />
                </Stack>
            </section>

            <section class="group">
                <h2 class="group__title">RadioGroup</h2>
                <RadioGroup
                    v-model="radioGroup"
                    name="tier"
                    :options="[
                        { value: 'x', label: 'Starter', variant: 'info' },
                        { value: 'y', label: 'Pro', variant: 'success' },
                        { value: 'z', label: 'Enterprise', variant: 'warning' },
                        { value: 'w', label: 'Locked', disabled: true },
                    ]"
                />
                <RadioGroup
                    v-model="radioGroup"
                    name="tier-row"
                    direction="row"
                    size="lg"
                    :options="[
                        { value: 'x', label: 'A' },
                        { value: 'y', label: 'B' },
                        { value: 'z', label: 'C' },
                    ]"
                />
            </section>

            <section class="group">
                <h2 class="group__title">Separator</h2>
                <Stack direction="col" gap="sm" align="stretch">
                    <Separator label="Section" />
                    <Separator variant="info" />
                    <Separator variant="error" />
                    <Stack direction="row" gap="sm" align="center">
                        <span>Left</span>
                        <Separator orientation="vertical" />
                        <span>Right</span>
                    </Stack>
                </Stack>
            </section>

            <section class="group">
                <h2 class="group__title">Checkbox</h2>
                <Stack direction="col" gap="sm" align="start">
                    <Checkbox v-model="checked" label="Checked" />
                    <Checkbox :model-value="false" label="Unchecked" variant="success" />
                    <Checkbox :model-value="true" indeterminate label="Indeterminate" variant="warning" />
                    <Checkbox :model-value="true" disabled label="Disabled" />
                    <Checkbox v-model="checked" size="lg" label="Large" variant="error" />
                </Stack>
            </section>

            <section class="group">
                <h2 class="group__title">CheckboxGroup</h2>
                <CheckboxGroup
                    v-model="tags"
                    name="tags"
                    :options="[
                        { value: 'a', label: 'Design', variant: 'info' },
                        { value: 'b', label: 'Build', variant: 'success' },
                        { value: 'c', label: 'Test', variant: 'warning' },
                        { value: 'd', label: 'Locked', disabled: true },
                    ]"
                />
                <CheckboxGroup
                    v-model="tags"
                    name="tags-row"
                    direction="row"
                    :options="[
                        { value: 'a', label: 'X' },
                        { value: 'b', label: 'Y' },
                        { value: 'c', label: 'Z' },
                    ]"
                />
            </section>
        </div>
        <div style="height: 50vh"></div>
    </App>
</template>

<script setup lang="ts">
import { ref } from "vue";

const log = (...args: unknown[]) => console.log("dismiss", ...args);

const switches = ref({
    info: true,
    success: false,
    warning: true,
    error: true,
    sm: true,
    lg: true,
});

const radio = ref("a");
const radioGroup = ref("x");
const checked = ref(true);
const tags = ref(["a", "c"]);
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
