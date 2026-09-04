<?php
/**
 * Template for preceptorship page (page-preceptorship.php).
 *
 * @package WellCrest
 */

get_header();

$us_states = array( 'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY' );

$learn_items = array(
	'Comprehensive patient assessment',
	'Diagnosis & treatment planning',
	'Medication management',
	'EMR documentation and clinical note writing',
	'Evidence-based care guidelines',
	'Behavioral health screening & management',
	'Practice workflow and patient communication',
	'Professional ethics and HIPAA compliance',
);

$program = array(
	array( 'One-on-One Supervision', 'Shadow experienced providers in a real clinical setting and participate in guided patient encounters.' ),
	array( 'Structured Clinical Hours', 'Complete required hours for certification, job readiness, or board requirements.' ),
	array( 'Real Patient Experience', 'Observe and participate in initial evaluations, follow-up visits, medication reviews, diagnostic assessments, and treatment planning.' ),
	array( 'Documentation Training', 'Learn SOAP notes, HPI documentation, medication management notes, and EMR best practices.' ),
);

$benefits = array(
	'Gain real-time clinical experience',
	'Boost clinical confidence',
	'Strengthen diagnostic and therapeutic skills',
	'Learn directly from licensed providers',
	'Improve EMR proficiency',
	'Become job-ready with practical exposure',
);
?>

<div class="page-hero page-hero-dark">
	<div class="page-hero-bg" aria-hidden="true">
		<div class="page-hero-blob-1"></div>
		<div class="page-hero-blob-2"></div>
	</div>
	<div class="page-hero-inner">
		<span class="page-hero-badge">
			<?php wellcrest_icon_e( 'graduation', 'icon icon-sm' ); ?>
			<?php esc_html_e( 'Clinical Training', 'wellcrest' ); ?>
		</span>
		<h1><?php esc_html_e( 'Preceptorship', 'wellcrest' ); ?></h1>
		<p><?php esc_html_e( 'Guided Clinical Learning With Expert Mentorship', 'wellcrest' ); ?></p>
	</div>
</div>

<main class="site-main">
	<section class="py-16">
		<div class="precept-inner">
			<p><?php esc_html_e( 'Our Preceptorship Program provides hands-on, real-world clinical training for Nurse Practitioners. Under the guidance of experienced providers, participants gain direct exposure to patient care, clinical decision-making, documentation standards, and practice management.', 'wellcrest' ); ?></p>
			<p style="margin-bottom:3rem;"><?php esc_html_e( 'Whether you are a new graduate preparing for independent practice or a clinician looking to enhance specific skills, our structured preceptorship ensures you learn with confidence and competence.', 'wellcrest' ); ?></p>

			<!-- What You Will Learn -->
			<div class="learn-box">
				<h2><?php esc_html_e( 'What You Will Learn', 'wellcrest' ); ?></h2>
				<div class="learn-grid">
					<?php foreach ( $learn_items as $item ) : ?>
						<div class="learn-item">
							<?php wellcrest_icon_e( 'check-circle' ); ?>
							<span><?php echo esc_html( $item ); ?></span>
						</div>
					<?php endforeach; ?>
				</div>
			</div>

			<!-- Who Can Enroll -->
			<div style="margin-bottom:3rem;">
				<h2><?php esc_html_e( 'Who Can Enroll?', 'wellcrest' ); ?></h2>
				<p><?php esc_html_e( 'Our preceptorship program is ideal for Nurse Practitioners (PMHNP).', 'wellcrest' ); ?></p>
			</div>

			<!-- Program Structure -->
			<div style="margin-bottom:3rem;">
				<h2><?php esc_html_e( 'Program Structure', 'wellcrest' ); ?></h2>
				<?php foreach ( $program as $idx => $step ) : ?>
					<div class="program-step">
						<div class="program-step-num"><span><?php echo esc_html( $idx + 1 ); ?></span></div>
						<h3><?php echo esc_html( $step[0] ); ?></h3>
						<p><?php echo esc_html( $step[1] ); ?></p>
					</div>
				<?php endforeach; ?>
			</div>

			<!-- Benefits -->
			<div class="benefits-box">
				<h2><?php esc_html_e( 'Benefits of Our Preceptorship Program', 'wellcrest' ); ?></h2>
				<div class="benefits-grid">
					<?php foreach ( $benefits as $benefit ) : ?>
						<div class="benefit-item">
							<?php wellcrest_icon_e( 'star' ); ?>
							<span><?php echo esc_html( $benefit ); ?></span>
						</div>
					<?php endforeach; ?>
				</div>
			</div>

			<!-- Duration & Scheduling -->
			<div style="margin-bottom:3rem;">
				<h2><?php esc_html_e( 'Duration & Scheduling', 'wellcrest' ); ?></h2>
				<p><?php esc_html_e( 'We offer flexible scheduling:', 'wellcrest' ); ?></p>
				<ul class="precept-list">
					<li><?php esc_html_e( 'Weekly or monthly programs', 'wellcrest' ); ?></li>
					<li><?php esc_html_e( 'Full-time or part-time clinical hours', 'wellcrest' ); ?></li>
					<li><?php esc_html_e( 'Remote + onsite hybrid options (based on provider availability)', 'wellcrest' ); ?></li>
				</ul>
			</div>

			<!-- Apply Form -->
			<div class="apply-card">
				<h2><?php esc_html_e( 'Apply for Preceptorship', 'wellcrest' ); ?></h2>
				<p class="sub"><?php esc_html_e( 'Complete the form below to apply for our Preceptorship Program.', 'wellcrest' ); ?></p>

				<?php
				$precept_success = ! empty( $_GET['wellcrest_precept'] ) && 'success' === sanitize_text_field( wp_unslash( $_GET['wellcrest_precept'] ) );
				?>

				<?php if ( $precept_success ) : ?>
					<div class="success-box">
						<?php wellcrest_icon_e( 'check-circle' ); ?>
						<h3><?php esc_html_e( 'Application Submitted!', 'wellcrest' ); ?></h3>
						<p><?php esc_html_e( 'Thank you for applying to the WellCrest Health Preceptorship Program. Our team will review your application and contact you shortly.', 'wellcrest' ); ?></p>
						<a href="<?php echo esc_url( home_url( '/preceptorship' ) ); ?>" class="btn-primary"><?php esc_html_e( 'Submit Another Application', 'wellcrest' ); ?></a>
					</div>
				<?php else : ?>
					<form method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
						<input type="hidden" name="action" value="wellcrest_preceptorship" />
						<?php wp_nonce_field( 'wellcrest_preceptorship', 'wellcrest_precept_nonce' ); ?>
						<div class="space-y-4">

							<!-- Personal -->
							<div>
								<p class="form-label-grp"><?php esc_html_e( 'Personal Information', 'wellcrest' ); ?></p>
								<div class="grid-2" style="margin-bottom:0.75rem;">
									<div class="form-field"><input type="text" name="firstName" required placeholder="<?php esc_attr_e( 'First Name *', 'wellcrest' ); ?>" /></div>
									<div class="form-field"><input type="text" name="lastName" required placeholder="<?php esc_attr_e( 'Last Name *', 'wellcrest' ); ?>" /></div>
								</div>
								<div class="grid-2" style="margin-bottom:0.75rem;">
									<div class="form-field"><input type="email" name="email" required placeholder="<?php esc_attr_e( 'Email Address *', 'wellcrest' ); ?>" /></div>
									<div class="form-field"><input type="tel" name="phone" required placeholder="<?php esc_attr_e( 'Phone Number *', 'wellcrest' ); ?>" /></div>
								</div>
								<div class="form-field"><input type="date" name="dob" placeholder="<?php esc_attr_e( 'Date of Birth', 'wellcrest' ); ?>" /></div>
								<div class="form-field"><input type="text" name="address" placeholder="<?php esc_attr_e( 'Street Address', 'wellcrest' ); ?>" /></div>
								<div class="grid-3">
									<div class="form-field col-span-2"><input type="text" name="city" placeholder="<?php esc_attr_e( 'City', 'wellcrest' ); ?>" /></div>
									<div class="form-field">
										<select name="state">
											<option value=""><?php esc_html_e( 'State', 'wellcrest' ); ?></option>
											<?php foreach ( $us_states as $s ) : ?>
												<option value="<?php echo esc_attr( $s ); ?>"><?php echo esc_html( $s ); ?></option>
											<?php endforeach; ?>
										</select>
									</div>
								</div>
								<div class="form-field"><input type="text" name="zip" maxlength="5" placeholder="<?php esc_attr_e( 'ZIP', 'wellcrest' ); ?>" /></div>
							</div>

							<!-- Academic -->
							<div>
								<p class="form-label-grp"><?php esc_html_e( 'Academic Information', 'wellcrest' ); ?></p>
								<div class="form-field"><input type="text" name="school" required placeholder="<?php esc_attr_e( 'School / Institution *', 'wellcrest' ); ?>" /></div>
								<div class="grid-2" style="margin-bottom:0.75rem;">
									<div class="form-field">
										<select name="program" required>
											<option value=""><?php esc_html_e( 'Degree / Program *', 'wellcrest' ); ?></option>
											<?php foreach ( array( 'PMHNP','FNP','AGACNP','PNP','CNM','CRNA','DNP','PhD in Nursing','BSN','Other' ) as $p ) : ?>
												<option value="<?php echo esc_attr( $p ); ?>"><?php echo esc_html( $p ); ?></option>
											<?php endforeach; ?>
										</select>
									</div>
									<div class="form-field">
										<select name="currentYear">
											<option value=""><?php esc_html_e( 'Current Year / Level', 'wellcrest' ); ?></option>
											<?php foreach ( array( '1st Year','2nd Year','3rd Year','4th Year','Graduated' ) as $y ) : ?>
												<option value="<?php echo esc_attr( $y ); ?>"><?php echo esc_html( $y ); ?></option>
											<?php endforeach; ?>
										</select>
									</div>
								</div>
								<div class="grid-2" style="margin-bottom:0.75rem;">
									<div class="form-field"><input type="number" min="1" name="hours" required placeholder="<?php esc_attr_e( 'Clinical Hours Needed *', 'wellcrest' ); ?>" /></div>
									<div class="form-field"><input type="date" name="preferredStartDate" placeholder="<?php esc_attr_e( 'Preferred Start Date', 'wellcrest' ); ?>" /></div>
								</div>
								<div class="form-field">
									<select name="preferredSchedule">
										<option value=""><?php esc_html_e( 'Preferred Schedule', 'wellcrest' ); ?></option>
										<option value="Weekdays"><?php esc_html_e( 'Weekdays', 'wellcrest' ); ?></option>
									</select>
								</div>
							</div>

							<!-- Compliance -->
							<div>
								<p class="form-label-grp"><?php esc_html_e( 'Compliance & Credentials', 'wellcrest' ); ?></p>
								<div class="grid-2">
									<div class="form-field">
										<select name="cprCertified" required>
											<option value=""><?php esc_html_e( 'CPR / BLS Certified? *', 'wellcrest' ); ?></option>
											<option value="Yes"><?php esc_html_e( 'Yes', 'wellcrest' ); ?></option>
											<option value="No"><?php esc_html_e( 'No', 'wellcrest' ); ?></option>
										</select>
									</div>
									<div class="form-field">
										<select name="immunizationsUpToDate">
											<option value=""><?php esc_html_e( 'Immunizations Up to Date?', 'wellcrest' ); ?></option>
											<option value="Yes"><?php esc_html_e( 'Yes', 'wellcrest' ); ?></option>
											<option value="No"><?php esc_html_e( 'No', 'wellcrest' ); ?></option>
										</select>
									</div>
								</div>
								<div class="grid-2">
									<div class="form-field">
										<select name="backgroundCheckCompleted" required>
											<option value=""><?php esc_html_e( 'Background Check Completed? *', 'wellcrest' ); ?></option>
											<option value="Yes"><?php esc_html_e( 'Yes', 'wellcrest' ); ?></option>
											<option value="No"><?php esc_html_e( 'No', 'wellcrest' ); ?></option>
										</select>
									</div>
									<div class="form-field">
										<select name="liabilityInsurance">
											<option value=""><?php esc_html_e( 'Liability / Malpractice Insurance?', 'wellcrest' ); ?></option>
											<option value="Yes"><?php esc_html_e( 'Yes', 'wellcrest' ); ?></option>
											<option value="No"><?php esc_html_e( 'No', 'wellcrest' ); ?></option>
											<option value="Through School"><?php esc_html_e( 'Through School', 'wellcrest' ); ?></option>
										</select>
									</div>
								</div>
							</div>

							<!-- Emergency -->
							<div>
								<p class="form-label-grp"><?php esc_html_e( 'Emergency Contact', 'wellcrest' ); ?></p>
								<div class="form-field"><input type="text" name="emergencyName" placeholder="<?php esc_attr_e( 'Emergency Contact Name', 'wellcrest' ); ?>" /></div>
								<div class="grid-2">
									<div class="form-field"><input type="tel" name="emergencyPhone" placeholder="<?php esc_attr_e( 'Emergency Contact Phone', 'wellcrest' ); ?>" /></div>
									<div class="form-field"><input type="text" name="emergencyRelationship" placeholder="<?php esc_attr_e( 'Relationship to You', 'wellcrest' ); ?>" /></div>
								</div>
							</div>

							<!-- Notes -->
							<div>
								<label class="form-label-grp" for="wc-notes"><?php esc_html_e( 'Additional Notes', 'wellcrest' ); ?></label>
								<div class="form-field">
									<textarea id="wc-notes" name="notes" rows="3" placeholder="<?php esc_attr_e( 'Any additional information, questions, or special requests...', 'wellcrest' ); ?>"></textarea>
								</div>
							</div>

							<button type="submit" class="btn-primary" style="width:100%;padding:1rem;">
								<?php wellcrest_icon_e( 'send' ); ?>
								<?php esc_html_e( 'Submit Application', 'wellcrest' ); ?>
							</button>
						</div>
					</form>
				<?php endif; ?>
			</div>
		</div>
	</section>

	<?php
	get_template_part(
		'template-parts/cta-banner',
		null,
		array(
			'title' => esc_html__( 'Ready to Take the Next Step?', 'wellcrest' ),
			'text'  => esc_html__( "Whether you're exploring our preceptorship program or need personalized mental health care, WellCrest Health is here to support you.", 'wellcrest' ),
			'btn'   => esc_html__( 'Book an Appointment', 'wellcrest' ),
			'url'   => home_url( '/contact' ),
			'use_calendly' => false,
		)
	);
	?>

</main>

<?php
get_footer();
