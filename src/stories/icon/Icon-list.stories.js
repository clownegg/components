import Icon from '@/packages/Icon/Icon.vue';
import { iconList } from '@/packages/Icon/iconList.ts';

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
      iconList,
    };
  },
  // Then, the spread values can be accessed directly in the template
  template: `<icon :name="iconName" v-for="iconName in iconList" :key="iconName" size="60px" />`,
});

export const IconList = Template.bind({});
