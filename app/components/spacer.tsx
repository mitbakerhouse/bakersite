interface SpacerHeight{
    h?: number
}

const Spacer = ({h}: SpacerHeight) => {
    return (
        <div style={{height: h? h : 500}}></div>
    );
}

export default Spacer;