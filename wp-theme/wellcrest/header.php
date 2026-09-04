<?php
/**
 * The header for our theme.
 *
 * @package WellCrest
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<?php
$phone      = wellcrest_opt( 'phone', '470-481-2034' );
$phone_href = wellcrest_opt( 'phone_href', 'tel:4704812034' );
$fax        = wellcrest_opt( 'fax', '470-481-2577' );
$email      = wellcrest_opt( 'email', 'info@wellcresttherapy.com' );
$linkedin   = wellcrest_opt( 'linkedin', 'https://linkedin.com/company/wellcrest-health' );
$facebook   = wellcrest_opt( 'facebook', 'https://web.facebook.com/profile.php?id=61577744694621' );
$instagram  = wellcrest_opt( 'instagram', 'https://instagram.com/wellcresttherapy' );
?>

<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'wellcrest' ); ?></a>

<header id="masthead" class="site-header">

	<!-- Top Bar (desktop only) -->
	<div class="topbar">
		<div class="topbar-inner">
			<div class="topbar-left">
				<a href="<?php echo esc_attr( $phone_href ); ?>">
					<svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
					<?php echo esc_html( $phone ); ?>
				</a>
				<span class="divider">|</span>
				<span class="fax"><?php echo esc_html( 'Fax: ' . $fax ); ?></span>
			</div>
			<div class="topbar-right">
				<a class="email" href="mailto:<?php echo esc_attr( antispambot( $email ) ); ?>"><?php echo esc_html( $email ); ?></a>
				<div class="social-links">
					<a href="<?php echo esc_url( $linkedin ); ?>" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
						<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0h.003z"/></svg>
					</a>
					<a href="<?php echo esc_url( $facebook ); ?>" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
						<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.736-.9 10.124-5.864 10.124-11.854z"/></svg>
					</a>
					<a href="<?php echo esc_url( $instagram ); ?>" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
						<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Main Nav -->
	<div class="header-inner">
		<div class="site-logo">
			<?php if ( has_custom_logo() ) : ?>
				<?php the_custom_logo(); ?>
			<?php else : ?>
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" aria-label="<?php bloginfo( 'name' ); ?>">
					<img src="<?php echo esc_url( WELLCREST_URI . '/assets/img/wellcrest-logo.png' ); ?>" alt="<?php bloginfo( 'name' ); ?>" />
				</a>
			<?php endif; ?>
		</div>

		<?php
		if ( has_nav_menu( 'primary' ) ) :
			wp_nav_menu(
				array(
					'theme_location' => 'primary',
					'menu_id'        => 'primary-menu',
					'menu_class'     => 'nav-menu',
					'container'      => 'nav',
					'container_class'=> 'main-nav',
					'container_id'   => 'site-navigation',
					'fallback_cb'    => false,
				)
			);
		else :
			?>
			<nav id="site-navigation" class="main-nav">
				<ul class="nav-menu">
					<li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a></li>
					<li><a href="<?php echo esc_url( home_url( '/about' ) ); ?>">About Us</a></li>
					<li><a href="<?php echo esc_url( home_url( '/services' ) ); ?>">Services <span class="nav-new">New</span></a></li>
					<li>
						<a href="<?php echo esc_url( home_url( '/sexual-health' ) ); ?>">Sexual Health <span class="nav-new">New</span> <svg class="icon icon-sm chevron" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg></a>
						<ul class="dropdown">
							<li><a href="<?php echo esc_url( home_url( '/sexual-health/assessment' ) ); ?>">Sexual Assessment &amp; Diagnosis</a></li>
							<li><a href="<?php echo esc_url( home_url( '/sexual-health/individual-therapy' ) ); ?>">Individual Therapy</a></li>
							<li><a href="<?php echo esc_url( home_url( '/sexual-health/education' ) ); ?>">Education &amp; Psychoeducation</a></li>
							<li><a href="<?php echo esc_url( home_url( '/sexual-health/coordination' ) ); ?>">Coordination of Care</a></li>
						</ul>
					</li>
					<li>
						<a href="<?php echo esc_url( home_url( '/locations' ) ); ?>">Locations <svg class="icon icon-sm chevron" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg></a>
						<ul class="dropdown">
							<li><a href="<?php echo esc_url( home_url( '/locations/georgia' ) ); ?>">Georgia</a></li>
							<li><a href="<?php echo esc_url( home_url( '/locations/arizona' ) ); ?>">Arizona</a></li>
							<li><a href="<?php echo esc_url( home_url( '/locations/maryland' ) ); ?>">Maryland</a></li>
						</ul>
					</li>
					<li><a href="<?php echo esc_url( home_url( '/articles' ) ); ?>">Articles</a></li>
					<li><a href="<?php echo esc_url( home_url( '/contact' ) ); ?>">Contact Us</a></li>
				</ul>
			</nav>
			<?php
		endif;
		?>

		<div class="header-cta">
			<a href="<?php echo esc_url( home_url( '/preceptorship' ) ); ?>" class="btn-preceptorship">
				<svg class="icon" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
				Preceptorship
			</a>
			<button type="button" class="btn-primary calendly-open" data-type="initial">
				Book Appointment
			</button>
		</div>

		<button type="button" class="menu-toggle" id="menu-toggle" aria-controls="mobile-menu" aria-expanded="false" aria-label="Open menu">
			<svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
		</button>
	</div>

	<!-- Mobile Menu -->
	<div class="mobile-menu" id="mobile-menu">
		<div class="mobile-menu-inner">
			<div class="mobile-top">
				<a href="<?php echo esc_attr( $phone_href ); ?>">
					<svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
					<?php echo esc_html( $phone ); ?>
				</a>
				<span class="divider">|</span>
				<a href="mailto:<?php echo esc_attr( antispambot( $email ) ); ?>">
					<svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="m22 6-10 7L2 6"/></svg>
					Email
				</a>
			</div>

			<?php
			if ( has_nav_menu( 'primary' ) ) :
				wp_nav_menu(
					array(
						'theme_location' => 'primary',
						'menu_id'        => 'mobile-primary-menu',
						'menu_class'     => 'mobile-nav',
						'container'      => false,
						'walker'         => new WellCrest_Mobile_Walker(),
					)
				);
			else :
				?>
				<ul class="mobile-nav">
					<li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a></li>
					<li><a href="<?php echo esc_url( home_url( '/about' ) ); ?>">About Us</a></li>
					<li><a href="<?php echo esc_url( home_url( '/services' ) ); ?>">Services <span class="nav-new">New</span></a></li>
					<li>
						<button type="button" class="mobile-drop-btn mobile-toggle">Sexual Health <span class="nav-new">New</span> <svg class="icon icon-xs" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg></button>
						<ul class="mobile-dropdown">
							<li><a href="<?php echo esc_url( home_url( '/sexual-health/assessment' ) ); ?>">Sexual Assessment &amp; Diagnosis</a></li>
							<li><a href="<?php echo esc_url( home_url( '/sexual-health/individual-therapy' ) ); ?>">Individual Therapy</a></li>
							<li><a href="<?php echo esc_url( home_url( '/sexual-health/education' ) ); ?>">Education &amp; Psychoeducation</a></li>
							<li><a href="<?php echo esc_url( home_url( '/sexual-health/coordination' ) ); ?>">Coordination of Care</a></li>
						</ul>
					</li>
					<li>
						<button type="button" class="mobile-drop-btn mobile-toggle">Locations <svg class="icon icon-xs" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg></button>
						<ul class="mobile-dropdown">
							<li><a href="<?php echo esc_url( home_url( '/locations/georgia' ) ); ?>">Georgia</a></li>
							<li><a href="<?php echo esc_url( home_url( '/locations/arizona' ) ); ?>">Arizona</a></li>
							<li><a href="<?php echo esc_url( home_url( '/locations/maryland' ) ); ?>">Maryland</a></li>
						</ul>
					</li>
					<li><a href="<?php echo esc_url( home_url( '/articles' ) ); ?>">Articles</a></li>
					<li><a href="<?php echo esc_url( home_url( '/contact' ) ); ?>">Contact Us</a></li>
					<li><a class="btn-preceptorship-link" href="<?php echo esc_url( home_url( '/preceptorship' ) ); ?>"><svg class="icon" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>Preceptorship</a></li>
				</ul>
				<?php
			endif;
			?>

			<button type="button" class="btn-primary mobile-menu-cta calendly-open" data-type="initial">
				Book Appointment
			</button>
		</div>
	</div>
</header>

<div id="primary" class="site-content">
