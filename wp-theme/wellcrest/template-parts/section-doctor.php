<?php
/**
 * Doctor bio section.
 *
 * @package WellCrest
 */

$photo = get_theme_mod( 'wellcrest_doctor_photo', WELLCREST_URI . '/assets/img/dr-faminu.jpg' );
?>

<section class="doctor-section">
	<div class="container">
		<div class="doctor-grid">
			<div class="doctor-photo-wrap">
				<img src="<?php echo esc_url( $photo ); ?>" alt="Dr. Oladunni Faminu" />
				<div class="doctor-badge"><?php esc_html_e( 'Founder & Lead Provider', 'wellcrest' ); ?></div>
			</div>

			<div>
				<?php wellcrest_icon_e( 'quote', 'icon quote' ); ?>
				<h2 class="doctor-name"><?php esc_html_e( 'Dr. Oladunni Faminu', 'wellcrest' ); ?></h2>
				<p class="doctor-credential"><?php esc_html_e( 'DNP, PMHNP, FNP — Founder of WellCrest Health', 'wellcrest' ); ?></p>

				<div class="doctor-bio">
					<p><?php esc_html_e( 'Dr. Oladunni Faminu is a doctorate-prepared Advanced Practice Nurse Practitioner with over 20 years of clinical experience. She holds dual certification as both a Psychiatric Mental Health Nurse Practitioner (PMHNP) and a Family Nurse Practitioner (FNP) — which enables her to provide comprehensive, coordinated mental health care.', 'wellcrest' ); ?></p>
					<p><?php esc_html_e( 'Dr. Faminu earned her Doctor of Nursing Practice (DNP) with a postgraduate specialization in Psychiatric Mental Health from Frontier Nursing University in Kentucky, and her Master of Science in Nursing as a Family Nurse Practitioner from South University in Savannah, Georgia.', 'wellcrest' ); ?></p>
					<p><?php esc_html_e( 'Licensed in Georgia, Arizona, and Maryland, she provides evidence-based, patient-centered care rooted in empathy and clinical precision. Her approach goes beyond symptom management — she works to understand each patient\'s full picture, tailoring individualized treatment plans that support long-term wellness across mind and body.', 'wellcrest' ); ?></p>
				</div>

				<div class="doctor-meta">
					<div class="doctor-meta-item">
						<?php wellcrest_icon_e( 'map-pin' ); ?>
						<span><?php esc_html_e( 'Licensed in GA, AZ, MD', 'wellcrest' ); ?></span>
					</div>
					<div class="doctor-meta-item">
						<?php wellcrest_icon_e( 'award' ); ?>
						<span><?php esc_html_e( 'PMHNP + FNP Board Certified', 'wellcrest' ); ?></span>
					</div>
					<div class="doctor-meta-item">
						<?php wellcrest_icon_e( 'graduation' ); ?>
						<span><?php esc_html_e( '20+ Years Experience', 'wellcrest' ); ?></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
