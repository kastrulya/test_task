export default {
    /**
     * @param el - DOM node
     * @returns Number percent of visible element
     */
    partInViewport (el) {
        let rect = el.getBoundingClientRect();
        let isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        let isFullyInViewport = rect.top > 0 && rect.bottom < window.innerHeight;

        if (!isVisible) return 0;
        if (isFullyInViewport) return 100;

        let visibleHeight = rect.top > 0? window.innerHeight - rect.top : rect.bottom;

        return (100 * visibleHeight / rect.height);
    },

    bind (el, binding) {
        el.$onScroll = function () {
            let part = binding.def.partInViewport(el);

            switch(part) {
                case 0:
                    break;
                case 100:
                    binding.def.unbind(el, binding);
                default:
                    if (typeof binding.value === 'function') {
                        binding.value(el, part);
                    }
            }
        };
        document.addEventListener('scroll', el.$onScroll);
    },

    inserted (el) {
        el.$onScroll();
    },

    unbind (el) {
        document.removeEventListener('scroll', el.$onScroll);
        delete el.$onScroll;
    }
}
