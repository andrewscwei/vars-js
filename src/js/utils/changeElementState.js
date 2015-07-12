/**
 *  vars
 *  (c) VARIANTE (http://variante.io)
 *
 *  This software is released under the MIT License:
 *  http://www.opensource.org/licenses/mit-license.php
 */
define
(
    [
    ],
    function
    (
    )
    {
        /**
         * Changes the state of a DOM element, assumes that state classes
         * are prefixed with 'state-'.
         *
         * @param  {Object} element
         * @param  {String} state
         */
        function changeElementState(element, state)
        {
            if (!element) return;
            if (element.classList.contains('state'+state)) return;

            element.className = element.className.replace(/(^|\s)state-\S+/g, '');
            element.classList.add('state-'+state);
        }

        return changeElementState;
    }
);
