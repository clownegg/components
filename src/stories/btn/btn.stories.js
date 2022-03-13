import Btn from '@/packages/Btn/Btn.vue';
import { iconList } from '@/packages/Icon/iconList.ts';

export default {
  title: 'Components/Btn',
  component: Btn,
  argTypes: {
    label: {
      defaultValue: 'label',
      control: 'text',
    },
    loading: {
      control: 'boolean',
    },
    icon: {
      control: 'select',
      options: iconList,
    },
    theme: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'info', 'danger', 'dark'],
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Btn },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<btn v-bind="args">{{args.label}}</btn>',
});

export const Default = Template.bind({});
