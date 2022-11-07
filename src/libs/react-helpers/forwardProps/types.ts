import React from "react";
import { CSSObject } from "styled-components";
import { DATA_TESTID_ATTRIBUTE } from "./constants";

/**
 * Base interface used to extends components props.
 * Use with forwardProps helper.
 *
 * Example:
 *
 * export interface IListItem extends ITagProperties<ReactHTMLAttributes<HTMLDivElement>> {
 *   ...
 * }
 */
export interface ITagProperties<TAttributes> {
  // To be able to style the component
  className?: string;

  // Allo passing styles
  styles?: CSSObject;

  // Allow passing all valid HTML attributes for the tag itself
  tagAttributes?: TAttributes;

  /**
   * Used for accessibility or e2e testing.
   */

  // Used for unit-test
  [DATA_TESTID_ATTRIBUTE]?: string;
}

export interface ITagWithChildrenProperties<TAttributes>
  extends ITagProperties<TAttributes> {
  children: React.ReactNode;
}

/**
 * Type allowing to extract tagAttributes from a ITagProperties interface.
 *
 * Usage:
 *
 * const onClick: ExtractTagProperties<IListItemProps>['onClick'] = e => {
 *   ...
 * }
 */
export type ExtractTagProperties<I extends ITagProperties<any>> = NonNullable<
  I["tagAttributes"]
>;

/**
 * Shortcut to retrieve all React HTML attributes.
 */
export type ReactHTMLAttributes<T> = React.DetailedHTMLProps<
  React.HTMLAttributes<T>,
  T
>;
