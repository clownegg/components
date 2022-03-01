import { defineEmits } from 'vue';

export type Props = {
  loading?: boolean;
  disabled?: boolean;
  fluid?: boolean;
  plain?: boolean;
  outlined?: boolean;
  round?: boolean;
};

const emits = defineEmits<{
  (emit: 'click', event: MouseEvent): void;
  (emit: 'focus', event: FocusEvent): void;
  (emit: 'blur', event: FocusEvent): void;
}>();

export const handleClick = (event: MouseEvent) => {
  emits('click', event);
};

export const handleFocus = (event: FocusEvent) => {
  emits('focus', event);
};

export const handleBlur = (event: FocusEvent) => {
  emits('blur', event);
};
