export const required = (value) => {
  if (value) {
      return undefined;
  }
  else {
      return "Поле обязательно для заполнения";
  }
};

export const maxValueCreator = (maxValue) => (value) => {
        if (value && value.length && value.length <= maxValue) {
            return undefined;
        }
        else {
            return "Длина поля должна быть не более "+ maxValue;
        }
};

export const minValueCreator = (minValue) => {
    return (value) => {
        if (value && value.length && value.length >= minValue) {
            return undefined;
        }
        else {
            return "Длина поля должна быть не менее "+ minValue;
        }
    };
};