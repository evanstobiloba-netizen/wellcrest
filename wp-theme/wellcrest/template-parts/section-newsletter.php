<?php
/**
 * Newsletter section.
 *
 * @package WellCrest
 */
?>

<section class="newsletter-section">
	<div class="container">
		<div class="newsletter-card">
			<div class="newsletter-grid">
				<div class="newsletter-text">
					<h2><?php esc_html_e( 'Stay Updated', 'wellcrest' ); ?></h2>
					<p><?php esc_html_e( 'Get the latest mental health insights, news, and updates from WellCrest Health.', 'wellcrest' ); ?></p>
				</div>

				<div class="newsletter-success" id="newsletter-success" style="display:none;">
					<?php wellcrest_icon_e( 'check-circle' ); ?>
					<span class="font-medium"><?php esc_html_e( 'Thank you for subscribing!', 'wellcrest' ); ?></span>
				</div>

				<form class="newsletter-form" id="newsletter-form">
					<div class="field">
						<?php wellcrest_icon_e( 'mail' ); ?>
						<input type="email" placeholder="<?php esc_attr_e( 'Enter your email', 'wellcrest' ); ?>" required aria-label="<?php esc_attr_e( 'Email address', 'wellcrest' ); ?>" />
					</div>
					<button type="submit" class="btn-primary">
						<?php esc_html_e( 'Subscribe', 'wellcrest' ); ?>
						<?php wellcrest_icon_e( 'arrow' ); ?>
					</button>
				</form>
			</div>
		</div>
	</div>
</section>
