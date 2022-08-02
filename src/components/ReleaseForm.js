import React, {useState} from "react";

const ReleaseForm = ({onReleaseSubmit}) => {

    const [name, setName] = useState("");
    const[url, setUrl] = useState("");

    const handleNameChange = (evt) => {
        setName(evt.target.value);
    };

    const handleUrlChange = (evt) => {
        setUrl(evt.target.value);
    };

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        const nameToSubmit = name.trim();
        const urlToSubmit = url.trim();
        if (!nameToSubmit || !urlToSubmit) {
            return
        };
        
        onReleaseSubmit({
            name: nameToSubmit,
            url: urlToSubmit
        });

        setName("");
        setUrl("");
    };

    return (
        <form className="comment-form" onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder="Film Title"
                value={name}
                onChange={handleNameChange}
            />
            <input
                type="text"
                placeholder="Paste link here"
                value={url}
                onChange={handleUrlChange}
            />
            <input
                type="submit"
                value="Post"
            />
        </form>

    );

};

export default ReleaseForm;