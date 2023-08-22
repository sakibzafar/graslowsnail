/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PictureCreateFormInputValues = {
    title?: string;
    description?: string;
    imageUrl?: string;
};
export declare type PictureCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PictureCreateFormOverridesProps = {
    PictureCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PictureCreateFormProps = React.PropsWithChildren<{
    overrides?: PictureCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PictureCreateFormInputValues) => PictureCreateFormInputValues;
    onSuccess?: (fields: PictureCreateFormInputValues) => void;
    onError?: (fields: PictureCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PictureCreateFormInputValues) => PictureCreateFormInputValues;
    onValidate?: PictureCreateFormValidationValues;
} & React.CSSProperties>;
export default function PictureCreateForm(props: PictureCreateFormProps): React.ReactElement;
