import { NavigateActions } from "../flux/Actions";

export default function Navigate(path: string) {
    window.history.replaceState({}, '', '' + path);

    // Save into the store
    NavigateActions.navigate(path);
}
