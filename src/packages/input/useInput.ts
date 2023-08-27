export type InputEmits = {
  (emit: 'update:modelValue', value: string): void;
  (emit: 'change', event: Event): void;
  (emit: 'focus', event: FocusEvent): void;
  (emit: 'blur', event: FocusEvent): void;
  (emit: 'keydown', event: KeyboardEvent): void;
};



export const useInput = (emits: InputEmits) => {
  const handleInput = (event: Event) => {
    if (!(event.target instanceof HTMLInputElement)) return;

    const value = event.target.value;
    emits('update:modelValue', value);
  };

  const handleChange = (event: Event) => {
    emits('change', event);
  };

  const handleFocus = (event: FocusEvent) => {
    emits("focus", event);
  };

  const handleBlur = (event: FocusEvent) => {
    emits("blur", event);
  };

  const handleKeydown = (event: KeyboardEvent) => {
    emits('keydown', event);
  };

  return {
    handleInput,
    handleChange,
    handleFocus,
    handleBlur,
    handleKeydown,
  };
};
