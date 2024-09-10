import { Slice } from "@tiptap/pm/model";
import { EditorView } from "@tiptap/pm/view";
/**
 * fix for https://github.com/ProseMirror/prosemirror/issues/1430#issuecomment-1822570821
 *
 * Without this fix, pasting two paragraphs would cause the second one to be indented in the other
 * this fix wraps every element in the slice in it's own blockContainer, to prevent Prosemirror from nesting the
 * elements on paste.
 *
 * The exception is when we encounter blockGroups with listitems, because those actually should be nested
 */
export declare function transformPasted(slice: Slice, view: EditorView): Slice;
