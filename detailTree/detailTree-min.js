function dttOpenClose(e){node=e.currentTarget,open=!1,classes=node.classList,classes.contains("ddtOpenAll")&&(open=!0),classes.contains("ddtCloseAll")&&(open=!1),target=node.getAttribute("treeid"),target&&(tree=document.getElementById(target),tree&&openClose(tree,open))}function openClose(e,t){e.classList&&e.classList.contains("dttDetails")&&(e.open=t);for(var n=e.childNodes,a=0;a<n.length;a++)openClose(n[a],t)}function dttBranchToggle(e){node=e.currentTarget;for(var t=node.childNodes,n=0;n<t.length;n++)if(kid=t[n],classes=kid.classList,classes&&classes.contains("dttDetails")){kid.open?kid.open=!1:kid.open=!0;break}e.stopPropagation()}window.addEventListener("load",function(){for(var e=document.getElementsByClassName("dttBranch"),t=0;t<e.length;t++)e[t].addEventListener("click",dttBranchToggle);var n=[];n[0]=document.getElementsByClassName("dttLabel"),n[1]=document.getElementsByClassName("dttLeaf");for(var a=0;a<n.length;a++){var r=n[a];for(t=0;t<r.length;t++){var s=r[t].childNodes;for(j=0;j<s.length;j++){var c=s[j];c.classList&&(c.classList.add("dttFocusItem"),c.addEventListener("keydown",dttLabelKey))}}}var o=document.getElementsByClassName("dttDetails");for(t=0;t<o.length;t++){o[t].addEventListener("toggle",dttToggleCheck,t)}var i=document.getElementsByTagName("summary");for(t=0;t<i.length;t++){var l=i[t];l.addEventListener("click",dttBranchToggle),l.parentNode.classList.contains("dttDetails")&&(l.addEventListener("keydown",dttSummaryKey),l.classList.add("dttFocusItem"))}var d=document.getElementsByClassName("ddtOpenAll");for(t=0;t<d.length;t++)d[t].addEventListener("click",dttOpenClose);for(d=document.getElementsByClassName("ddtCloseAll"),t=0;t<d.length;t++)d[t].addEventListener("click",dttOpenClose)});var keyCode=Object.freeze({RETURN:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40});function dttLabelKey(e){var t=e.keyCode,n=e.currentTarget,a=currentLimb(n),r=currentBranches(n),s=currenBranchPosition(n),c=r.length-1,o=!1;n.classList&&n.classList.contains("dttLeaf")&&(o=!0);var i=null;switch(t){case keyCode.RIGHT:o||focusOnBranchSummary(a,n);break;case keyCode.UP:if(s>0)i=r[Math.max(0,s-1)];else if(0==s){focusOnBranchSummary(parentBranch(n),n)}break;case keyCode.DOWN:i=r[Math.min(s+1,c)];break;case keyCode.END:i=r[c];break;case keyCode.HOME:i=r[0]}i&&focusOnBranchLabel(i,n)}function dttSummaryKey(e){var t=e.keyCode,n=e.currentTarget,a=currentLimb(n),r=n.parentNode;if(r.classList.contains("dttDetails"))switch(t){case keyCode.RETURN:case keyCode.RIGHT:case keyCode.DOWN:r.open?focusOnTree(limbSubTree(a),n):r.open=!0;break;case keyCode.UP:case keyCode.LEFT:r.open?r.open=!1:focusOnBranchLabel(a,n)}}function currentLimb(e){for(var t=null,n=e;n;){var a=n.classList;if(a&&a.contains("dttLabel")){t=n.parentNode;break}if(a&&(a.contains("dttLeaf")||a.contains("dttBranch"))){t=n;break}n=n.parentNode}return t}function parentBranch(e){var t=currentLimb(e);parenttree=currentTree(t.parentNode);var n=parenttree.classList;return n&&n.contains("dttTree")?t:currentLimb(t.parentNode)}function currentTree(e){for(var t=null,n=e;n;){var a=n.classList;if(a&&(a.contains("dttSubTree")||a.contains("dttTree"))){t=n;break}n=n.parentNode}return t}function limbSubTree(e){var t=e.classList;if(t&&t.contains("dttBranch"))for(var n=e.childNodes,a=0;a<n.length;a++){var r=n[a],s=r.classList;if(s&&s.contains("dttDetails"))for(var c=r.childNodes,o=0;o<c.length;o++){var i=c[o].classList;if(i&&i.contains("dttSubTree"))return c[o]}}}function parentTree(e){ret=null;var t=e.classList;return t&&t.contains("dttSubTree")&&(ret=currentTree(e.parentNode)),ret}function treeBranches(e){for(var t=[],n=0;n<e.childNodes.length;n++){var a=e.childNodes[n];a.classList&&(a.classList.contains("dttLeaf")||a.classList.contains("dttBranch"))&&t.push(a)}return t}function currentBranches(e){return treeBranches(currentTree(e))}function branchPosition(e,t){for(var n=-1,a=0;a<e.length;a++)if(e[a]===t){n=a;break}return n}function currenBranchPosition(e){var t=currentLimb(e);return branchPosition(currentBranches(e),t)}function focusOnBranchSummary(e,t){void 0===t&&(t=null);for(var n=null,a=e.childNodes,r=0;r<a.length;r++){var s=a[r],c=s.classList;if(c&&c.contains("dttDetails"))for(var o=s.childNodes,i=0;i<o.length;i++){if("SUMMARY"==o[i].tagName){n=o[i];break}}if(n)break}n&&moveFocus(n,t)}function focusOnBranchLabel(e,n){void 0===n&&(n=null);var a=null,r=e.childNodes,s=e.classList;if(s&&s.contains("dttLeaf"))for(var c=0;c<r.length;c++){if((i=(o=r[c]).classList)&&i.contains("dttFocusItem")){a=o;break}}else for(c=0;c<r.length;c++){var o,i;if((i=(o=r[c]).classList)&&i.contains("dttLabel"))for(var l=o.childNodes,d=0;d<l.length;d++)if(t=l[d],t.classList&&t.classList.contains("dttFocusItem")){a=t;break}if(a)break}a&&moveFocus(a,n)}function focusOnTree(e,t){focusOnBranchLabel(treeBranches(e)[0],t)}function moveFocus(e,t){void 0===t&&(t=null),e.focus()}function dttToggleCheck(e){node=e.currentTarget;var t="treeclosed";node.open&&(t="treeopen");for(var n=node.parentNode,a=null;n;)if(n.classList.contains("dttBranch")){a=n;break}a&&a.setAttribute("dttState",t)}