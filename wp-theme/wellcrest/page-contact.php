<?php
/**
 * Template for contact page (page-contact.php).
 *
 * @package WellCrest
 */

get_header();

$phone   = wellcrest_opt( 'phone', '470-481-2034' );
$email   = wellcrest_opt( 'email', 'info@wellcresttherapy.com' );
$address = wellcrest_opt( 'address', '7910 Mall Ring Road Suite 200' );
$address2 = wellcrest_opt( 'address_l2', 'Stonecrest, GA 30038' );
$fax     = wellcrest_opt( 'fax', '470-481-2577' );

get_template_part(
	'template-parts/page-hero',
	null,
	array(
		'title'    => get_the_title() ? get_the_title() : esc_html__( 'Get in Touch', 'wellcrest' ),
		'badge'    => esc_html__( 'Contact Us', 'wellcrest' ),
		'subtitle' => esc_html__( "Have questions? We're here to help. Reach out to us and we'll get back to you as soon as possible.", 'wellcrest' ),
	)
);
?>

<main class="site-main">
	<section class="py-16">
		<div class="container">
			<div class="contact-grid">

				<!-- Contact form -->
				<div class="contact-form-card">
					<h2><?php esc_html_e( 'Send us a Message', 'wellcrest' ); ?></h2>

					<?php if ( ! empty( $_POST['wellcrest_contact_submitted'] ) && isset( $_POST['wellcrest_contact_nonce'] ) && wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['wellcrest_contact_nonce'] ) ), 'wellcrest_contact' ) ) : ?>
						<div class="error-box" style="background:#ecfdf5;border-color:#d1fae5;color:#059669;">
							<?php echo esc_html( get_transient( 'wellcrest_contact_notice' ) ?: esc_html__( 'Thank you! Your message has been sent.', 'wellcrest' ) ); ?>
						</div>
					<?php endif; ?>

					<form method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" class="space-y-4">
						<input type="hidden" name="action" value="wellcrest_contact" />
						<?php wp_nonce_field( 'wellcrest_contact', 'wellcrest_contact_nonce' ); ?>
						<div class="form-field">
							<label for="wc-name"><?php esc_html_e( 'Full Name *', 'wellcrest' ); ?></label>
							<input type="text" id="wc-name" name="name" required placeholder="<?php esc_attr_e( 'Your full name', 'wellcrest' ); ?>" />
						</div>
						<div class="form-field">
							<label for="wc-email"><?php esc_html_e( 'Email Address *', 'wellcrest' ); ?></label>
							<input type="email" id="wc-email" name="email" required placeholder="<?php esc_attr_e( 'your@email.com', 'wellcrest' ); ?>" />
						</div>
						<div class="form-field">
							<label for="wc-phone"><?php esc_html_e( 'Phone Number', 'wellcrest' ); ?></label>
							<input type="tel" id="wc-phone" name="phone" placeholder="<?php esc_attr_e( '(555) 123-4567', 'wellcrest' ); ?>" />
						</div>
						<div class="form-field">
							<label for="wc-service"><?php esc_html_e( 'Service Interest', 'wellcrest' ); ?></label>
							<select id="wc-service" name="service">
								<option value=""><?php esc_html_e( 'Select a service', 'wellcrest' ); ?></option>
								<option value="depression"><?php esc_html_e( 'Depression Treatment', 'wellcrest' ); ?></option>
								<option value="anxiety"><?php esc_html_e( 'Anxiety Treatment', 'wellcrest' ); ?></option>
								<option value="bipolar"><?php esc_html_e( 'Bipolar Disorder', 'wellcrest' ); ?></option>
								<option value="add-adhd"><?php esc_html_e( 'ADD/ADHD', 'wellcrest' ); ?></option>
								<option value="ptsd"><?php esc_html_e( 'PTSD Treatment', 'wellcrest' ); ?></option>
								<option value="insomnia"><?php esc_html_e( 'Insomnia/Sleep Disorder', 'wellcrest' ); ?></option>
								<option value="other"><?php esc_html_e( 'Other', 'wellcrest' ); ?></option>
							</select>
						</div>
						<div class="form-field">
							<label for="wc-message"><?php esc_html_e( 'Message *', 'wellcrest' ); ?></label>
							<textarea id="wc-message" name="message" rows="4" required placeholder="<?php esc_attr_e( 'How can we help you?', 'wellcrest' ); ?>"></textarea>
						</div>
						<button type="submit" class="btn-primary" style="width:100%;background:var(--brand-navy);">
							<?php esc_html_e( 'Send Message', 'wellcrest' ); ?>
							<?php wellcrest_icon_e( 'send' ); ?>
						</button>
					</form>
				</div>

				<!-- Contact info -->
				<div class="space-y-4">
					<div class="contact-info-card">
						<h3><?php esc_html_e( 'Contact Information', 'wellcrest' ); ?></h3>
						<ul>
							<li>
								<?php wellcrest_icon_e( 'map-pin' ); ?>
								<div>
									<p class="contact-info-label"><?php esc_html_e( 'Address', 'wellcrest' ); ?></p>
									<p class="contact-info-value"><?php echo esc_html( $address ); ?><br /><?php echo esc_html( $address2 ); ?></p>
								</div>
							</li>
							<li>
								<?php wellcrest_icon_e( 'phone' ); ?>
								<div>
									<p class="contact-info-label"><?php esc_html_e( 'Phone', 'wellcrest' ); ?></p>
									<p class="contact-info-value"><a href="tel:4704812034"><?php echo esc_html( $phone ); ?></a></p>
								</div>
							</li>
							<li>
								<?php wellcrest_icon_e( 'mail' ); ?>
								<div>
									<p class="contact-info-label"><?php esc_html_e( 'Email', 'wellcrest' ); ?></p>
									<p class="contact-info-value"><a href="mailto:<?php echo esc_attr( antispambot( $email ) ); ?>"><?php echo esc_html( $email ); ?></a></p>
								</div>
							</li>
							<li>
								<?php wellcrest_icon_e( 'clock' ); ?>
								<div>
									<p class="contact-info-label"><?php esc_html_e( 'Fax', 'wellcrest' ); ?></p>
									<p class="contact-info-value"><?php echo esc_html( $fax ); ?></p>
								</div>
							</li>
						</ul>
					</div>

					<div class="contact-info-card">
						<h3><?php esc_html_e( 'Office Hours', 'wellcrest' ); ?></h3>
						<div class="contact-hours">
							<ul>
								<li><span><?php esc_html_e( 'Monday - Friday', 'wellcrest' ); ?></span><span>8:00 AM - 5:00 PM</span></li>
								<li><span><?php esc_html_e( 'Saturday', 'wellcrest' ); ?></span><span><?php esc_html_e( 'By Appointment', 'wellcrest' ); ?></span></li>
								<li><span><?php esc_html_e( 'Sunday', 'wellcrest' ); ?></span><span><?php esc_html_e( 'Closed', 'wellcrest' ); ?></span></li>
							</ul>
						</div>
					</div>

					<div class="contact-emergency">
						<h3><?php esc_html_e( 'Emergency?', 'wellcrest' ); ?></h3>
						<p><?php esc_html_e( "If you're experiencing a mental health emergency, please call 911 or go to your nearest emergency room.", 'wellcrest' ); ?></p>
						<button type="button" class="calendly-open" data-type="initial">
							<?php esc_html_e( 'Book Appointment', 'wellcrest' ); ?>
							<?php wellcrest_icon_e( 'arrow' ); ?>
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<?php get_template_part( 'template-parts/section-doctor' ); ?>

</main>

<?php
get_footer();
