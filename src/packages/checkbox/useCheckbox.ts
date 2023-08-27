import {ref} from "vue"

export type CheckboxEmits = {
  (emit: 'update:modelValue', value: boolean): void;
  (emit: 'change', event: Event): void;
  (emit: 'focus', event: FocusEvent): void;
  (emit: 'blur', event: FocusEvent): void;
};

export interface CheckboxProps {
  label: string;
  name?: string;
  disabled?: boolean;
  modelValue?: boolean;
};

export const useCheckbox = (props: CheckboxProps, emits: CheckboxEmits) => {
  const model = ref(props.modelValue ?? false)

  const handleChange = (event: Event) => {
    if ((event.target instanceof HTMLInputElement)) {
      emits("update:modelValue", event.target.checked);
      emits('change', event)
    }
  };

  const handleFocus = (event: FocusEvent) => {
    emits("focus", event);
  };

  const handleBlur = (event: FocusEvent) => {
    emits("blur", event);
  };

  return {
    model,
    handleChange,
    handleFocus,
    handleBlur,
  };
};
