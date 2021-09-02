import {PullWindow} from "../../components/window/pullWindow";
import "../../style/page/signIn.scss"

const data = ['upload-list']

const Upload = () => {
    return (
        <>
            <PullWindow data={data} />
        </>
    )
}

export {Upload};
