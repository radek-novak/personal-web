import React from "react";

const InputScreen = (props: { onSubmit: (s: string) => void }) => {
  const [text, setText] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  return (
    <div className="inputScreen">
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          <div>
            Run <pre className="u-inline">du</pre> command
            <small>
              <i>(expecting block size 512)</i>
            </small>
            <code>
              <pre>du -d 3 | pbcopy</pre>
            </code>
            and paste the output in the textarea
          </div>
          <form
            onSubmit={e => {
              e.preventDefault();
              setLoading(true);
              props.onSubmit(text);
            }}
          >
            <textarea
              name="data"
              rows={20}
              cols={38}
              onPaste={e => {
                e.preventDefault();
                setLoading(true);
                const data = e.clipboardData.getData("Text");
                setTimeout(() => {
                  props.onSubmit(data);
                }, 0);
              }}
              placeholder="Paste the output of `du` here"
              onChange={e => setText(e.target.value)}
            />
            <button type="submit">Visualize</button>
          </form>
        </>
      )}
    </div>
  );
};

export default InputScreen;
