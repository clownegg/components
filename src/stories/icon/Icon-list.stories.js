import Icon, { iconType } from '@/packages/Icon/Icon.vue';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {},
};

const Template = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Icon },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return {
      iconList: iconType,
    };
  },
  // Then, the spread values can be accessed directly in the template
  template: `<icon :name="iconName" v-for="iconName in iconList" :key="iconName" />`,
});

export const IconList = Template.bind({});
