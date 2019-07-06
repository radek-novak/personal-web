import React, { Component } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import pathSize from "../components/PathSizeIndicator";
import Viz from "../components/Viz";
import { order, folderSizes } from "../utils/filesizes/getFolderSizes";
import dir2tree from "../utils/filesizes/dir2tree";
import testdata from "../example";

// { a: { b: 1, c: 2, d: {dd: 22}}}, ['a, 'd'] => {d: {dd: 22}}
const lensView = (obj: Tree, lensPath: string[]) => {
  let current = JSON.parse(JSON.stringify(obj));
  const lastKey = lensPath[lensPath.length - 1];
  const keyPath = lensPath.slice(0, -1);
  for (let key of keyPath) {
    current = current[key].children;
  }

  for (let key of Object.keys(current)) {
    if (key !== lastKey) delete current[key];
  }

  return current;
};

type Tree = { [key: string]: Tree } | {};
type Path = string[];
type Size = any;
type HandleEvent = {
  path: Path;
  size?: Size;
};

export default class HomePage extends Component {
  state = {
    currentPath: ["Users", "rdkn"],
    viewing: { path: null, size: 0 },
    currentTreeData: null,
    loading: true
  };

  componentDidMount() {
    this.fetch(testdata);
  }

  fetch = (duOutput: string = testdata) => {
    console.time();
    const _folderSizes = order(folderSizes(duOutput));

    const treeData = dir2tree(_folderSizes);
    console.timeEnd();
    this.setState({
      currentTreeData: lensView(treeData, this.state.currentPath),
      loading: false
    });
  };

  handleHover = ({ size, path }: HandleEvent) => {
    this.setState({
      viewing: {
        size,
        path
      }
    });
  };

  handleClick = ({ path, size }: HandleEvent) => {
    const currentPath = [...this.state.currentPath.slice(0, -1), ...path];
    this.setState(
      {
        currentPath,
        loading: true
      },
      this.fetch
    );
  };

  breadClick = (path: Path) => {
    this.setState(
      {
        currentPath: path,
        loading: true
      },
      this.fetch
    );
  };

  render() {
    const {
      viewing: { path, size },
      loading,
      currentTreeData,
      currentPath
    } = this.state;

    if (loading && !currentTreeData) {
      return "Loading...";
    }

    const combinedPath = currentPath.slice(0, -1).concat(path || []);

    return (
      <>
        <div className="TopBar">
          {loading ? (
            "Loading..."
          ) : (
            <Breadcrumbs
              combinedPath={combinedPath}
              path={currentPath}
              onClick={this.breadClick}
            />
          )}
        </div>
        <Viz
          data={currentTreeData}
          onHover={this.handleHover}
          onClick={this.handleClick}
        />
        <div className="BottomBar">
          {pathSize({ path: combinedPath, size })}
        </div>
      </>
    );
  }
}
