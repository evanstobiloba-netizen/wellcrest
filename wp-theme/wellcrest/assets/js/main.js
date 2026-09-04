/**
 * WellCrest Health - main.js
 * Handles: navbar scroll state, mobile menu, mobile dropdowns, Calendly modal, newsletter.
 */
(function () {
	'use strict';

	document.addEventListener('DOMContentLoaded', function () {

		/* ---------- Navbar scroll state ---------- */
		var header = document.getElementById('masthead');
		function onScroll() {
			if (!header) return;
			if (window.scrollY > 20) {
				header.classList.add('scrolled');
			} else {
				header.classList.remove('scrolled');
			}
		}
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });

		/* ---------- Mobile menu ---------- */
		var toggle = document.getElementById('menu-toggle');
		var mobileMenu = document.getElementById('mobile-menu');
		if (toggle && mobileMenu) {
			toggle.addEventListener('click', function () {
				var open = mobileMenu.classList.toggle('open');
				toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
				toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
				document.body.style.overflow = open ? 'hidden' : '';
			});

			// Close menu when a link inside is clicked.
			mobileMenu.querySelectorAll('a').forEach(function (link) {
				link.addEventListener('click', function () {
					mobileMenu.classList.remove('open');
					toggle.setAttribute('aria-expanded', 'false');
					document.body.style.overflow = '';
				});
			});
		}

		/* ---------- Mobile dropdowns ---------- */
		document.querySelectorAll('.mobile-toggle').forEach(function (btn) {
			btn.addEventListener('click', function () {
				var dd = btn.parentElement.querySelector('.mobile-dropdown');
				if (dd) dd.classList.toggle('open');
			});
		});

		/* ---------- Escape closes overlays ---------- */
		document.addEventListener('keydown', function (e) {
			if (e.key === 'Escape') {
				if (mobileMenu && mobileMenu.classList.contains('open')) {
					mobileMenu.classList.remove('open');
					if (toggle) toggle.setAttribute('aria-expanded', 'false');
					document.body.style.overflow = '';
				}
				closeCalendly();
			}
		});

		/* ---------- Calendly modal ---------- */
		var overlay = document.getElementById('calendly-overlay');
		var widgetContainer = document.getElementById('calendly-widget');
		var closeBtn = document.getElementById('calendly-close');
		var currentType = 'initial';

		function closeCalendly() {
			if (overlay) overlay.classList.remove('open');
			document.body.style.overflow = '';
		}

		function openCalendly(type) {
			if (!overlay || !widgetContainer) return;
			currentType = type || 'initial';
			// Set active tab.
			overlay.querySelectorAll('.calendly-tab').forEach(function (tab) {
				tab.classList.toggle('active', tab.getAttribute('data-type') === currentType);
			});
			// Load widget.
			widgetContainer.innerHTML = '';
			// Remove any prior calendly script.
			var prevWidget = document.getElementById('calendly-widget-script');
			if (prevWidget) prevWidget.remove();
			var data = (window.wellcrestData && window.wellcrestData.calendly) || {};
			var url = currentType === 'followup' ? (data.followup || 'https://calendly.com/wellcresttherapy-info/follow-up-visit') : (data.initial || 'https://calendly.com/wellcresttherapy-info/initial-consultation');
			var div = document.createElement('div');
			div.className = 'calendly-inline-widget';
			div.setAttribute('data-url', url);
			div.style.minWidth = '320px';
			div.style.height = '700px';
			widgetContainer.appendChild(div);
			var script = document.createElement('script');
			script.id = 'calendly-widget-script';
			script.src = 'https://assets.calendly.com/assets/external/widget.js';
			script.async = true;
			widgetContainer.appendChild(script);
			overlay.classList.add('open');
			document.body.style.overflow = 'hidden';
		}

		// Bind all elements with calendly-open.
		document.querySelectorAll('.calendly-open').forEach(function (el) {
			el.addEventListener('click', function () {
				openCalendly(el.getAttribute('data-type') || 'initial');
			});
		});

		// Tabs.
		if (overlay) {
			overlay.querySelectorAll('.calendly-tab').forEach(function (tab) {
				tab.addEventListener('click', function () {
					openCalendly(tab.getAttribute('data-type'));
				});
			});
			if (closeBtn) closeBtn.addEventListener('click', closeCalendly);
			overlay.addEventListener('click', function (e) {
				if (e.target === overlay) closeCalendly();
			});
		}

		/* ---------- Newsletter ---------- */
		var newsletterForm = document.getElementById('newsletter-form');
		if (newsletterForm) {
			newsletterForm.addEventListener('submit', function (e) {
				e.preventDefault();
				var email = newsletterForm.querySelector('input[type="email"]');
				if (email && email.value) {
					var success = document.getElementById('newsletter-success');
					if (success) success.style.display = 'flex';
					newsletterForm.style.display = 'none';
				}
			});
		}
	});
})();
