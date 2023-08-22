/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Picture } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PictureUpdateFormInputValues = {
    title?: string;
    description?: string;
    imageUrl?: string;
};
export declare type PictureUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PictureUpdateFormOverridesProps = {
    PictureUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PictureUpdateFormProps = React.PropsWithChildren<{
    overrides?: PictureUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    picture?: Picture;
    onSubmit?: (fields: PictureUpdateFormInputValues) => PictureUpdateFormInputValues;
    onSuccess?: (fields: PictureUpdateFormInputValues) => void;
    onError?: (fields: PictureUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PictureUpdateFormInputValues) => PictureUpdateFormInputValues;
    onValidate?: PictureUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PictureUpdateForm(props: PictureUpdateFormProps): React.ReactElement;
