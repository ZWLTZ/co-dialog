import { supportBrowserAnimationEventOfName_end } from './defaultParameters.js'
import validateBrowserCompatiblityAnimationEvent from './compatiblity.js'
import resetScroll from './resetScroll.js'

export default function excuteHideAnimation (options, currentDialogNode) {
    // 兼容 animation.
    if ( validateBrowserCompatiblityAnimationEvent(currentDialogNode, supportBrowserAnimationEventOfName_end) != undefined ) {
        // animation动画加载
        this.animate(options).delay(100).fadeOut('fadeOut',{
            type: 'end',
            callback: function () {
                currentDialogNode.style.display = 'none';
                resetScroll(' codialog-show', false);
            }
        }).render();
    }
    else {
        // ie9 不兼容 animation.
        currentDialogNode.style.display = 'none';
        resetScroll(' codialog-show', false);
    }
}