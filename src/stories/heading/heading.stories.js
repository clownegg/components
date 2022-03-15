import Heading from '@/packages/Heading/Heading.vue';

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    tag: {
      defaultValue: 'h1',
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    href: {
      control: 'text',
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Heading },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<Heading v-bind="args" id="header-anchor">Title</Heading>',
});

export const Default = Template.bind({});
