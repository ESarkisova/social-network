const DIVIDER_FIELD_NAME = '->';

const objectToArray = (obj, prefix) => {
    let names = [];

    for (let [key] of Object.entries(obj)) {
        if ((typeof obj[key] == 'object') && obj[key] !== null) names.push(...objectToArray(obj[key], key));
        else names.push(prefix? prefix + DIVIDER_FIELD_NAME + key : key);
    }
    return names;
};

export const errorToObject = (fieldsObject, errors) => {
    const names = objectToArray(fieldsObject);
    let errorsObj = {};
    errors.forEach( error => {
        names.some( fieldName => {
            if( error.toLowerCase().indexOf(`(${fieldName.toLowerCase()})`) !== -1){
                error = error.substr(0, error.length - fieldName.length - 2);
                if(fieldName.indexOf(DIVIDER_FIELD_NAME) !== -1) {
                    const fieldNameArr = fieldName.split(DIVIDER_FIELD_NAME);
                    if(errorsObj[fieldNameArr[0]]) {
                        errorsObj[fieldNameArr[0]][fieldNameArr[1]] =  error;
                    } else {
                        errorsObj[fieldNameArr[0]] = {};
                        errorsObj[fieldNameArr[0]][fieldNameArr[1]] =  error;
                    }
                } else {
                    errorsObj[fieldName] =  error;
                }

                return;
            }
        });
    });

    return errorsObj;
};