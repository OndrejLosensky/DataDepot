import React from "react";

const Typography = () => {
    return (
        <div className="flex flex-col justify-center space-y-16">
            <div className="flex flex-row gap-x-8 ">
                <h2 className="text-3xl text-gray-200 font-roboto"> Text 1</h2>
                <h2 className="text-3xl text-gray-200 font-inter"> Text 2</h2>
                <h2 className="text-3xl text-gray-200 font-sora"> Text 3</h2>
                <h2 className="text-3xl text-gray-200 font-urbanist"> Text 4</h2>
                <h2 className="text-3xl text-gray-200 font-handlee"> Text 5</h2>
                <h2 className="text-3xl text-gray-200 font-montserrat"> Text 6</h2>
                <h2 className="text-3xl text-gray-200 font-freeman"> Text 7</h2>
            </div>
            <div className="flex flex-row space-x-32 items-center justify-center">
                <div className="text-center text-gray-300">
                    <h1 className="text-5xl"> Heading 1</h1>
                    <h2 className="text-4xl">Heading 2</h2>
                    <h3 className="text-3xl"> Heading 3</h3>
                    <h4 className="text-2xl"> Heading 4</h4>
                    <h5 className="text-xl"> Heading 5</h5>
                    <h6 className="text-lg"> Heading 6</h6>
                </div>
                <div>
                    <p className="text-md"> Paragraph </p>
                </div>
            </div>
        </div>
    )
}

export default Typography;