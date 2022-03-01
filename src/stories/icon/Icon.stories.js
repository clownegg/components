import Icon, { iconType } from '@/packages/Icon/Icon.vue';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      defaultValue: 'calendar',
      control: 'select',
      options: iconType,
    },
    size: {
      control: 'number',
    },
    color: {
      control: 'color',
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Icon },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return {
      size: args.size,
      name: args.name,
      color: args.color,
    };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<icon :name="name" :size="size" :color="color" />',
});

export const Default = Template.bind({});
