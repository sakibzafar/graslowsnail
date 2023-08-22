/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Album } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function AlbumUpdateForm(props) {
  const {
    id: idProp,
    album: albumModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    decription: "",
    thumbnailUrl: "",
    pictureIds: [],
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [decription, setDecription] = React.useState(initialValues.decription);
  const [thumbnailUrl, setThumbnailUrl] = React.useState(
    initialValues.thumbnailUrl
  );
  const [pictureIds, setPictureIds] = React.useState(initialValues.pictureIds);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = albumRecord
      ? { ...initialValues, ...albumRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setDecription(cleanValues.decription);
    setThumbnailUrl(cleanValues.thumbnailUrl);
    setPictureIds(cleanValues.pictureIds ?? []);
    setCurrentPictureIdsValue("");
    setErrors({});
  };
  const [albumRecord, setAlbumRecord] = React.useState(albumModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Album, idProp)
        : albumModelProp;
      setAlbumRecord(record);
    };
    queryData();
  }, [idProp, albumModelProp]);
  React.useEffect(resetStateValues, [albumRecord]);
  const [currentPictureIdsValue, setCurrentPictureIdsValue] =
    React.useState("");
  const pictureIdsRef = React.createRef();
  const validations = {
    title: [],
    decription: [],
    thumbnailUrl: [{ type: "URL" }],
    pictureIds: [],
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
          title,
          decription,
          thumbnailUrl,
          pictureIds,
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
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Album.copyOf(albumRecord, (updated) => {
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
      {...getOverrideProps(overrides, "AlbumUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              decription,
              thumbnailUrl,
              pictureIds,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Decription"
        isRequired={false}
        isReadOnly={false}
        value={decription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              decription: value,
              thumbnailUrl,
              pictureIds,
            };
            const result = onChange(modelFields);
            value = result?.decription ?? value;
          }
          if (errors.decription?.hasError) {
            runValidationTasks("decription", value);
          }
          setDecription(value);
        }}
        onBlur={() => runValidationTasks("decription", decription)}
        errorMessage={errors.decription?.errorMessage}
        hasError={errors.decription?.hasError}
        {...getOverrideProps(overrides, "decription")}
      ></TextField>
      <TextField
        label="Thumbnail url"
        isRequired={false}
        isReadOnly={false}
        value={thumbnailUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              decription,
              thumbnailUrl: value,
              pictureIds,
            };
            const result = onChange(modelFields);
            value = result?.thumbnailUrl ?? value;
          }
          if (errors.thumbnailUrl?.hasError) {
            runValidationTasks("thumbnailUrl", value);
          }
          setThumbnailUrl(value);
        }}
        onBlur={() => runValidationTasks("thumbnailUrl", thumbnailUrl)}
        errorMessage={errors.thumbnailUrl?.errorMessage}
        hasError={errors.thumbnailUrl?.hasError}
        {...getOverrideProps(overrides, "thumbnailUrl")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              decription,
              thumbnailUrl,
              pictureIds: values,
            };
            const result = onChange(modelFields);
            values = result?.pictureIds ?? values;
          }
          setPictureIds(values);
          setCurrentPictureIdsValue("");
        }}
        currentFieldValue={currentPictureIdsValue}
        label={"Picture ids"}
        items={pictureIds}
        hasError={errors?.pictureIds?.hasError}
        errorMessage={errors?.pictureIds?.errorMessage}
        setFieldValue={setCurrentPictureIdsValue}
        inputFieldRef={pictureIdsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Picture ids"
          isRequired={false}
          isReadOnly={false}
          value={currentPictureIdsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.pictureIds?.hasError) {
              runValidationTasks("pictureIds", value);
            }
            setCurrentPictureIdsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("pictureIds", currentPictureIdsValue)
          }
          errorMessage={errors.pictureIds?.errorMessage}
          hasError={errors.pictureIds?.hasError}
          ref={pictureIdsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "pictureIds")}
        ></TextField>
      </ArrayField>
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
          isDisabled={!(idProp || albumModelProp)}
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
              !(idProp || albumModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
