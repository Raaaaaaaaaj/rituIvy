import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Heart, Shield, Users, Award, TreePine } from "lucide-react";

const TermsandConditions = () => {
  return (
    <Layout>
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl text-jungle mb-8">
            Terms & Conditions
          </h1>

          <p>By	accessing	this	website,	making	a	reservation,	or	staying	at	Hotel	Ritu	Ivy,	guests	agree	to
            comply	with	the	following	terms	and	conditions.</p>
          {/* Smaller Rectangular Image */}
          {/* <div className="max-w-4xl mx-auto container">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=80"
              alt="Privacy Policy"
              className="w-full h-[120px] object-cover rounded-2xl shadow-elegant"
            />
          </div> */}
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="pb-24 bg-cream">
        <div className="container mx-auto px-4 max-w-4xl space-y-16">

          {/* Section */}
          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              1. Tariff
            </h2>

            <ul className="space-y-4 text-dark leading-relaxed mb-6">
              <li>• Room	tariffs	are	for	accommodation	only	and	are	exclusive	of	applicable	government	taxes
                unless	stated	otherwise.	</li>
              <li>• Meals	and	additional	services	are	chargeable.	</li>
              <li>• Extra	person	charges	apply	for	occupancy	exceeding	the	standard	room	capacity.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              2. Settlement	of	Bills
            </h2>

            <ul className="space-y-4 text-dark leading-relaxed  mb-6">
              <li>• All	bills	must	be	settled	upon	presentation.</li>
              <li>• We	accept	cash,	debit/credit	cards,	UPI	and	bank	transfers.</li>
              <li>• Personal	cheques	are	not	accepted.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              3. Company’s	Lien	on	Guest	Property
            </h2>

            <p className="text-dark leading-relaxed  mb-6">
              In	case	of	non-payment	of	dues,	the	hotel	reserves	the	right	to	retain	guest	luggage	and
              belongings	until	outstanding	amounts	are	settled,	without	prejudice	to	further	legal
              remedies.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              4. Check-In	Requirements
            </h2>

            <ul className="space-y-4 text-dark leading-relaxed mb-6">
              <li>• Standard	Check-In:	12:00	PM</li>
              <li>• Standard	Check-Out:	11:00	AM	</li>
              <li>• Valid	government-issued	photo	ID	with	address	proof	is	mandatory	at	check-in	as	per
                Indian	law.</li>
              <li>• Foreign	nationals	must	present	passport	and	valid	visa.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              5. Early	Check-In	/	Late	Check-Out
            </h2>

            <ul className="space-y-4 text-dark leading-relaxed mb-6">
              <li>• Subject	to	availability.</li>
              <li>• Charges	may	apply	(half-day	or	full-day	tariff	as	applicable).</li>
              <li>• Valid	government-issued	photo	ID	with	address	proof	is	mandatory	at	check-in	as	per
                Indian	law.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              6. Luggage	Storage
            </h2>

            <p className="text-dark leading-relaxed  mb-6">Luggage	storage	is	subject	to	availability	and	entirely	at	guest’s	risk.	The	hotel	shall	not	be
              liable	for	loss	or	damage	beyond	its	reasonable	control.	</p>
          </div>

          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              7. Pets
            </h2>

            <ul className="space-y-4 text-dark leading-relaxed mb-6">
              <li>• Pets are permitted within hotel premises strictly subject to prior written approval from the
                hotel management.</li>
              <li>• Guests must submit complete details of the pet (including breed, size, vaccination
                records, and stay duration) to hotelrituivy@gmail.com prior to arrival</li>
              <li>• Management will review the request and respond within 24 hours, subject to applicable
                additional terms and conditions.</li>
              <li>• Approval is at the sole discretion of the hotel. The hotel reserves the right to refuse pet
                accommodation without assigning any reason.</li>
              <li>• Additional charges, security deposits, and specific compliance guidelines may apply.</li>
              <li>• Pet owners shall be fully responsible for:
                <ol>
                  <li> Any damage caused to hotel propert</li>
                  <li> Noise disturbances</li>
                  <li>Hygiene maintenance</li>
                  <li>Compliance with local laws and regulations</li>
                </ol>
              </li>
              <li>• Failure to comply with pet-related terms may result in cancellation of stay without
                refund.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              8. Guest	Belongings
            </h2>

            <p>Guests	are	advised	to	secure	their	valuables.	The	hotel	shall	not	be	liable	for	loss,	theft,	or	
damage	unless	items	are	of icially	deposited	with	management.</p>
          </div>


          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              9. Prohibited	&	Hazardous	Goods	
            </h2>

            <ul className="space-y-4 text-dark leading-relaxed mb-6">
              <li>• The	following	are	strictly	prohibited	on	hotel	premises:</li>
              <li>• Weapons,	explosives,	lammable	materials	</li>
              <li>• Illegal	substances	</li>
              <li>• Gambling	activities	</li>
              <li>• Contraband	or	objectionable	goods		</li>
              <li>• Violation	may	result in	immediate	eviction	and	legal	action. </li>
            </ul>
          </div>


          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              10. 	Damage	to	Property
            </h2>
            <p>Guests	will	be	held	responsible	for	any	damage	caused	to	hotel	property	by	themselves	or	
their	visitors.	Charges	must	be	settled	prior	to	departure.	</p>
          </div>


          <div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              11. Management’s	Right	of	Admission
            </h2>

            <ul className="space-y-4 text-dark leading-relaxed mb-6">
              <li>• The	hotel	reserves	the	right	to:	</li>
              <li>• Refuse	admission	</li>
              <li>• Remove	any	guest	violating	hotel	policies	</li>
              <li>• Cancel	reservations	in	case	of	misconduct	</li>
            </ul>
          </div>


<div>
            <h2 className="font-display text-3xl text-jungle mb-6">
              12. Photography	&	Commercial	Filming
            </h2>

           <p>
            Commercial	photography,	videography,	or	public	content	creation	within	hotel	premises	
requires	prior	written	approval	from	management.	
           </p>
          </div>












          <div className="pt-8 border-t border-jungle/20 text-sm text-dark">
            Last Updated: February 2026
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default TermsandConditions;
