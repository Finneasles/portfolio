---
title: "sqInRect"
categories: [ "Arrays","JavaScript" ]
comments: false
relatedArticles: false
date: "Apr 13, 2023"
repoName: "Practice"
---

```js

export const sqInRect = (l: number, w: number): null | number[] => {
  if (l === w) {
    return null;
  }
  const arr: number[] = [];
  while (l > 0 && w > 0) {
    if (l > w) {
      arr.push(w);
      l -= w;
    } else {
      arr.push(l);
      w -= l;
    }
  }
  return arr;
};

```
