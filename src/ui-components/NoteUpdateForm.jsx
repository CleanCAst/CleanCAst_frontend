/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Note } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function NoteUpdateForm(props) {
  const {
    id: idProp,
    note: noteModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    utc_date: "",
    hour0: "",
    hour1: "",
  };
  const [utc_date, setUtc_date] = React.useState(initialValues.utc_date);
  const [hour0, setHour0] = React.useState(initialValues.hour0);
  const [hour1, setHour1] = React.useState(initialValues.hour1);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = noteRecord
      ? { ...initialValues, ...noteRecord }
      : initialValues;
    setUtc_date(cleanValues.utc_date);
    setHour0(cleanValues.hour0);
    setHour1(cleanValues.hour1);
    setErrors({});
  };
  const [noteRecord, setNoteRecord] = React.useState(noteModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Note, idProp)
        : noteModelProp;
      setNoteRecord(record);
    };
    queryData();
  }, [idProp, noteModelProp]);
  React.useEffect(resetStateValues, [noteRecord]);
  const validations = {
    utc_date: [{ type: "Required" }],
    hour0: [{ type: "Required" }],
    hour1: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          utc_date,
          hour0,
          hour1,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Note.copyOf(noteRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "NoteUpdateForm")}
      {...rest}
    >
      <TextField
        label="Utc date"
        isRequired={true}
        isReadOnly={false}
        value={utc_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              utc_date: value,
              hour0,
              hour1,
            };
            const result = onChange(modelFields);
            value = result?.utc_date ?? value;
          }
          if (errors.utc_date?.hasError) {
            runValidationTasks("utc_date", value);
          }
          setUtc_date(value);
        }}
        onBlur={() => runValidationTasks("utc_date", utc_date)}
        errorMessage={errors.utc_date?.errorMessage}
        hasError={errors.utc_date?.hasError}
        {...getOverrideProps(overrides, "utc_date")}
      ></TextField>
      <TextField
        label="Hour0"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={hour0}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              utc_date,
              hour0: value,
              hour1,
            };
            const result = onChange(modelFields);
            value = result?.hour0 ?? value;
          }
          if (errors.hour0?.hasError) {
            runValidationTasks("hour0", value);
          }
          setHour0(value);
        }}
        onBlur={() => runValidationTasks("hour0", hour0)}
        errorMessage={errors.hour0?.errorMessage}
        hasError={errors.hour0?.hasError}
        {...getOverrideProps(overrides, "hour0")}
      ></TextField>
      <TextField
        label="Hour1"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={hour1}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              utc_date,
              hour0,
              hour1: value,
            };
            const result = onChange(modelFields);
            value = result?.hour1 ?? value;
          }
          if (errors.hour1?.hasError) {
            runValidationTasks("hour1", value);
          }
          setHour1(value);
        }}
        onBlur={() => runValidationTasks("hour1", hour1)}
        errorMessage={errors.hour1?.errorMessage}
        hasError={errors.hour1?.hasError}
        {...getOverrideProps(overrides, "hour1")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || noteModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || noteModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
