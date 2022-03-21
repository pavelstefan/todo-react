export default interface Action<P = undefined> {
    type: string;
    payload?: P;
}
