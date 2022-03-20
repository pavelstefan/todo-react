export default interface Action<P> {
    type: string;
    payload: P;
}
