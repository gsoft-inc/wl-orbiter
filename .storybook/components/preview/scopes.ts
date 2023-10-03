import * as OrbiterComponents from "@components";
import { CheckeredBackground } from "@stories/components";
import { forwardRef, useCallback, useContext, useDebugValue, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState } from "react";
import { useFormik } from "formik";
import cx from "classnames";

const React = {
    useState,
    useEffect,
    useContext,
    useReducer,
    useCallback,
    useMemo,
    useRef,
    useImperativeHandle,
    useLayoutEffect,
    useDebugValue,
    forwardRef
};

const DocsComponents = {
    CheckeredBackground
};

const ThirdParties = {
    cx,
    useFormik
};

export const KnownScope = {
    ...OrbiterComponents,
    ...React,
    ...DocsComponents,
    ...ThirdParties
};
