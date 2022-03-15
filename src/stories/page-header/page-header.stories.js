import PageHeader from '@/packages/PageHeader/PageHeader.vue';

export default {
  title: 'Components/PageHeader',
  component: PageHeader,
  argTypes: {
    title: {
      defaultValue: '詳細画面',
      control: 'text',
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PageHeader },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<page-header :title="args.title" />',
});

export const Default = Template.bind({});
