import {PullWindow} from "../../components/window/pullWindow";
import React, {useEffect, useState} from "react";
import {getDirLs} from "../../api/get";


const Download: React.FC = () => {
    const [dirLs, setData] = useState({
        data: []
    })

    const query = async () => {
        return await getDirLs({path: "/"}).then(
            value => {
                return value.res
            })
    }

    /*
    * res: {code: 200|404, res: []}
    *
    *
    */
    useEffect(()=>{
        query().then((res)=>{
            let obj: any = {}
            obj.data = res
            setData(obj)
        }).catch(()=>{
            console.error('fail query')
        })
    }, [])

    return (
        <>
            <PullWindow data={dirLs.data} />
        </>
    )
}

export {Download};
