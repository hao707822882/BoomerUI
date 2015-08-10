/**
 * Created by Administrator on 2015/8/7.
 */
(function (window) {
    /**
     * 基础对象
     * @constructor
     */
    function Jz() {
    }

    /**
     * 随机数方法
     * @param num
     * @returns {number}
     */
    Jz.prototype.random = function (num) {
        return Math.round(Math.random() * num)
    }

    /**
     * @param ext
     */
    Jz.extends = function (ext) {
        for (var piece in ext) {
            if (piece) {
                Jz.prototype[piece] = ext[piece];
            }
        }
    }

    /**
     * @returns {Jz}
     * @constructor
     */
    window.J$ = function () {
        return new Jz(window)
    }
    window.JE = Jz;
})(window)
