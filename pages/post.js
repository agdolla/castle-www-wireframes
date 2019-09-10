import * as React from 'react';

import { Editor } from 'slate-react';
import { Value } from 'slate';
import { css } from 'react-emotion';

import Plain from 'slate-plain-serializer';
import ReactMarkdown from 'react-markdown';
import MarkdownPluginBreaks from 'remark-breaks';
import PluginInsertBlockOnEnter from '~/editor/plugins/insert-block-on-enter';
import PageLayout from '~/components/layouts/PageLayout';
import PageNavigation from '~/components/PageNavigation';

const STYLES_ROOT = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 0.875rem;
`;

const STYLES_ROOT_LEFT = css`
  min-width: 10%;
  width: 100%;
`;

const STYLES_ROOT_RIGHT = css`
  flex-shrink: 0;
  width: 480px;
  background: #000;
  color: #fff;
  font-family: 'mono';
  font-size: 12px;
`;

const STYLES_ROOT_RIGHT_TOP = css`
  background: #171717;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 24px 0 24px;
`;

const STYLES_ROOT_RIGHT_CONTENT = css`
  padding: 24px;
`;

const STYLES_POST_TITLE = css`
  font-size: 6rem;
  line-height: 1;
  font-family: 'heading';
`;

const STYLES_LAYOUT = css`
  margin: 128px auto 128px auto;
  max-width: 768px;
  padding: 0 24px 0 24px;
  width: 100%;
  white-space: pre-wrap;

  ul,
  ol {
    padding-left: 16px;
  }

  h1 {
    font-size: 3rem;
    line-height: 1;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-top: 2rem;

    :first-child {
      margin-top: 0px;
    }
  }

  h2 {
    font-size: 2.25rem;
    line-height: 1;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-top: 2rem;

    :first-child {
      margin-top: 0px;
    }
  }

  h3 {
    font-size: 1.5rem;
    line-height: 1;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-top: 2rem;

    :first-child {
      margin-top: 0px;
    }
  }

  h4 {
    font-size: 1.33rem;
    line-height: 1;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-top: 2rem;

    :first-child {
      margin-top: 0px;
    }
  }

  h5 {
    font-size: 1.25rem;
    line-height: 1;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-top: 2rem;

    :first-child {
      margin-top: 0px;
    }
  }

  h6 {
    font-size: 1.15rem;
    line-height: 1;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-top: 2rem;

    :first-child {
      margin-top: 0px;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.5em;
    margin-bottom: 1rem;
  }

  li {
    font-size: 1rem;
    line-height: 1.5em;
  }

  blockquote {
    padding-left: 24px;
    border-left: 4px solid #000;
    margin-bottom: 1rem;
  }

  hr {
    border: 0;
    height: 1px;
    width: 100%;
    display: block;
    background: #454545;
    margin-bottom: 1rem;
    margin-top: 1rem;
    :first-child {
      margin-top: 0px;
    }
  }

  pre {
    padding: 16px;
    background: #000;
    display: block;
    white-space: pre-wrap;
    width: 100%;
    margin-bottom: 1rem;
  }

  code {
    font-size: 0.875rem;
    font-family: 'mono';
    background: #000;
  }

  img {
    width: 100%;
    margin-bottom: 1rem;
  }

  a {
    color: rgba(255, 0, 255, 0.8);
    font-weight: 600;

    :hover {
      color: rgba(255, 0, 255, 1);
    }

    :visited {
      color: rgba(255, 0, 255, 0.8);
    }
  }
`;

const STYLES_LINK = css`
  margin-right: 24px;
  font-family: 'brand';
  font-size: 16px;
`;

const STYLES_BRAND = css`
  font-family: 'logo';
  font-size: 16px;
  margin-right: 48px;
  margin-bottom: 4px;
`;

const STYLES_EDITOR_LINE = css`
  white-space: pre-wrap;
  overflow-wrap: break-word;
  width: 100%;
`;

const STYLES_BYLINE = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
`;

const STYLES_BYLINE_TEXT = css`
  min-width: 10%;
  width: 100%;
  padding-left: 8px;
`;

const STYLES_AVATAR = css`
  height: 32px;
  width: 32px;
  border-radius: 32px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);
  background: red;
  background-size: cover;
  background-position: 50% 50%;
  flex-shrink: 0;
`;

const STYLES_HEADER = css`
  padding: 24px;
  position: fixed;
  top: 0;
  right: 480px;
  background: green;
  left: 188px;
`;

const disallowedTypes = ['html', 'virtualHtml', 'parsedHtml'];

export default class PostPage extends React.Component {
  state = {
    value: Value.fromJSON({
      object: 'value',
      document: {
        object: 'document',
        nodes: [
          {
            object: 'block',
            type: 'line',
            nodes: [
              {
                object: 'text',
                text: `Thorstein Bunde Veblen
The Theory of the Leisure Class
1899

___

## CONSPICUOUS CONSUMPTION

*consumption* even **antedates** the ***appearance*** In what has been \`subsistence\` said of the evolution of the vicarious leisure class and its differentiation from the general body of the working classes, reference has been made to a further division of labour, — that between the different servant classes. One portion of the servant class, chiefly those persons whose occupation is vicarious leisure, come to undertake a new, subsidiary range of duties — the vicarious consumption of goods. The most obvious form in which this consumption occurs is seen in the wearing of liveries and the occupation of spacious servants’ quarters. Another, scarcely less obtrusive or less effective form of vicarious consumption, and a much more widely prevalent one, is the consumption of food, clothing, dwelling, and furniture by the lady and the rest of the domestic establishment.

## Economic Evolution

> But already at a point in economic evolution far antedating the emergence of the lady, specialised consumption of goods as an evidence of pecuniary strength had begun to work out in a more or less elaborate system.

* hello
* test
  * cake
  * cat
* dog
&nbsp;
The beginning of a differentiation in consumption even 
&nbsp;
1. hello
2. test
  4. hello
  5. hello
8. cake

---

antedates the _appearance_ of __anything__ that can ___fairly___ be called pecuniary [economic](google.com) strength. It is traceable back to the initial phase of predatory culture, and there is even a suggestion that an incipient differentiation in this respect lies back of the beginnings of the predatory life. This most primitive differentiation in the consumption of goods is like the later differentiation with which we are all so intimately familiar, in that it is largely of a ceremonial character, but unlike the latter it does not rest on a difference in accumulated wealth. The utility of consumption as an evidence of wealth is to be classed as a derivative growth. It is an adaption to a new end, by a selective process, of a distinction previously existing and well established in men’s habits of thought.

\`\`\`
In the earlier phases of the predatory culture the only differentiation is a broad distinction between an honourable superior class made up of the able-bodied men on the one side, and a base inferior class of labouring women on the other. According to the ideal scheme of life in force at the time it is the office of the men to consume what the women produce. Such consumption as falls to the women is merely incidental to their work; it is a means to their continued labour, and not a consumption directed to their own comfort and fulness of life. Unproductive consumption of goods is honourable, primarily as a mark of prowess and a perquisite of human dignity; secondarily it becomes substantially honourable to itself, especially the consumption of the more desirable things. The consumption of choice articles of food, and frequently also of rare articles of adornment, becomes tabu to the women and children; and if there is a base (servile) class of men, the tabu holds also for them. With a further advance in culture this tabu may change into simple custom of a more or less rigorous character; but whatever be the theoretical basis of the distinction which is maintained, whether it be a tabu or a larger conventionality, the features of the conventional scheme of consumption do not change easily. When the quasi-peaceable stage of industry is reached, with its fundamental institution of chattel slavery, the general principle, more or less rigorously applied, is that the base, industrious class should consume only what may be necessary to their subsistence. In the nature of things, luxuries and the comforts of life belong to the leisure class. Under the tabu, certain victuals, and more particularly certain beverages, are strictly reserved for the use of the superior class.
\`\`\`

### The Ceremonial Differentiation

The ceremonial differentiation of the dietary is best seen in the use of intoxicating beverages and narcotics. If these articles of consumption are costly, they are felt to be noble and honorific. Therefore the base classes, primarily the women, practice an enforced continence with respect to these stimulants, except in countries where they are obtainable at a very low cost. From archaic times down through all the length of the patriarchal regime it has been the office of the women to prepare and administer these luxuries, and it has been the perquisite of the men of gentle birth and breeding to consume them. Drunkenness and the other pathological consequences of the free use of stimulants therefore tend in their turn to become honorific, as being a mark, at the second remove, of the superior status of those who are able to afford the indulgence. Infirmities induced by over-indulgence are among some peoples freely recognised as manly attributes. It has even happened that the name for certain diseased conditions of the body arising from such an origin has passed into everyday speech as a synonym for “noble” or “gentle”. It is only at a relatively early stage of culture that the symptoms of expensive vice are conventionally accepted as marks of a superior status, and so tend to become virtues and command the deference of the community; but the reputability that attaches to certain expensive vices long retains so much of its force as to appreciably lesson the disapprobation visited upon the men of the wealthy or noble class for any excessive indulgence. The same invidious distinction adds force to the current disapproval of any indulgence of this kind on the part of women, minors, and inferiors. This invidious traditional distinction has not lost its force even among the more advanced peoples of today. Where the example set by the leisure class retains its imperative force in the regulation of the conventionalities, it is observable that the women still in great measure practise the same traditional continence with regard to stimulants.

This characterisation of the greater continence in the use of stimulants practised by the women of the reputable classes may seem an excessive refinement of logic at the expense of common sense. But facts within easy reach of any one who cares to know them go to say that the greater abstinence of women is in some part due to an imperative conventionality; and this conventionality is, in a general way, strongest where the patriarchal tradition — the tradition that the woman is a chattel — has retained its hold in greatest vigour. In a sense which has been greatly qualified in scope and rigour, but which has by no means lost its meaning even yet, this tradition says that the woman, being a chattel, should consume only what is necessary to her sustenance, — except so far as her further consumption contributes to the comfort or the good repute of her master. The consumption of luxuries, in the true sense, is a consumption directed to the comfort of the consumer himself, and is, therefore, a mark of the master. Any such consumption by others can take place only on a basis of sufferance. In communities where the popular habits of thought have been profoundly shaped by the patriarchal tradition we may accordingly look for survivals of the tabu on luxuries at least to the extent of a conventional deprecation of their use by the unfree and dependent class. This is more particularly true as regards certain luxuries, the use of which by the dependent class would detract sensibly from the comfort or pleasure of their masters, or which are held to be of doubtful legitimacy on other grounds. In the apprehension of the great conservative middle class of Western civilisation the use of these various stimulants is obnoxious to at least one, if not both, of these objections; and it is a fact too significant to be passed over that it is precisely among these middle classes of the Germanic culture, with their strong surviving sense of the patriarchal proprieties, that the women are to the greatest extent subject to a qualified tabu on narcotics and alcoholic beverages. With many qualifications — with more qualifications as the patriarchal tradition has gradually weakened — the general rule is felt to be right and binding that women should consume only for the benefit of their masters. The objection of course presents itself that expenditure on women’s dress and household paraphernalia is an obvious exception to this rule; but it will appear in the sequel that this exception is much more obvious than substantial. During the earlier stages of economic development, consumption of goods without stint, especially consumption of the better grades of goods, — ideally all consumption in excess of the subsistence minimum, — pertains normally to the leisure class. This restriction tends to disappear, at least formally, after the later peaceable stage has been reached, with private ownership of goods and an industrial system based on wage labour or on the petty household economy. But during the earlier quasi™peaceable stage, when so many of the traditions through which the institution of a leisure class has affected the economic life of later times were taking form and consistency, this principle has had the force of a conventional law. It has served as the norm to which consumption has tended to conform, and any appreciable departure from it is to be regarded as an aberrant form, sure to be eliminated sooner or later in the further course of development.

#### The Quasi-Peaceable Gentlemen of Leisure

The quasi-peaceable gentleman of leisure, then, not only 
---
consumes of the staff of life beyond the minimum required for \`subsistence\` and physical efficiency, but his consumption also undergoes a specialisation as regards the quality of the goods consumed. He consumes freely and of the best, in food, drink, narcotics, shelter, services, ornaments, apparel, weapons and accoutrements, amusements, amulets, and idols or divinities. In the process of gradual amelioration which takes place in the articles of his consumption, the motive principle and proximate aim of innovation is no doubt the higher efficiency of the improved and more elaborate products for personal comfort and well-being. But that does not remain the sole purpose of their consumption. The canon of reputability is at hand and seizes upon such innovations as are, according to its standard, fit to survive. Since the consumption of these more excellent goods is an evidence of wealth, it becomes honorific; and conversely, the failure to consume in due quantity and quality becomes a mark of inferiority and demerit.

This growth of punctilious discrimination as to qualitative excellence in eating, drinking, etc. presently affects not only the manner of life, but also the training and intellectual activity of the gentleman of leisure. He is no longer simply the successful, aggressive male, — the man of strength, resource, and intrepidity. In order to avoid stultification he must also cultivate his tastes, for it now becomes incumbent on him to discriminate with some nicety between the noble and the ignoble in consumable goods. He becomes a connoisseur in creditable viands of various degrees of merit, in manly beverages and trinkets, in seemly apparel and architecture, in weapons, games, dancers, and the narcotics. This cultivation of aesthetic faculty requires time and application, and the demands made upon the gentleman in this direction therefore tend to change his life of leisure into a more or less arduous application to the business of learning how to live a life of ostensible leisure in a becoming way. Closely related to the requirement that the gentleman must consume freely and of the right kind of goods, there is the requirement that he must know how to consume them in a seemly manner. His life of leisure must be conducted in due form. Hence arise good manners in the way pointed out in an earlier chapter. Highbred manners and ways of living are items of conformity to the norm of conspicuous leisure and conspicuous consumption.

Conspicuous consumption of valuable goods is a means of reputability to the gentleman of leisure. As wealth accumulates on his hands, his own unaided effort will not avail to sufficiently put his opulence in evidence by this method. The aid of friends and competitors is therefore brought in by resorting to the giving of valuable presents and expensive feasts and entertainments. Presents and feasts had probably another origin than that of naive ostentation, but they required their utility for this purpose very early, and they have retained that character to the present; so that their utility in this respect has now long been the substantial ground on which these usages rest. Costly entertainments, such as the potlatch or the ball, are peculiarly adapted to serve this end. The competitor with whom the entertainer wishes to institute a comparison is, by this method, made to serve as a means to the end. He consumes vicariously for his host at the same time that he is witness to the consumption of that excess of good things which his host is unable to dispose of single-handed, and he is also made to witness his host’s facility in etiquette.

#### Costly

In the giving of costly entertainments other motives, of more genial kind, are of course also present. The custom of festive gatherings probably originated in motives of conviviality and religion; these motives are also present in the later development, but they do not continue to be the sole motives. The latter-day leisure-class festivities and entertainments may continue in some slight degree to serve the religious need and in a higher degree the needs of recreation and conviviality, but they also serve an invidious purpose; and they serve it none the less effectually for having a colorable non-invidious ground in these more avowable motives. But the economic effect of these social amenities is not therefore lessened, either in the vicarious consumption of goods or in the exhibition of difficult and costly achievements in etiquette.

![Image](https://pbs.twimg.com/media/EDGS-HTUYAAOUGe?format=jpg&name=medium)

As wealth accumulates, the leisure class develops further in function and structure, and there arises a differentiation within the class. There is a more or less elaborate system of rank and grades. This differentiation is furthered by the inheritance of wealth and the consequent inheritance of gentility. With the inheritance of gentility goes the inheritance of obligatory leisure; and gentility of a sufficient potency to entail a life of leisure may be inherited without the complement of wealth required to maintain a dignified leisure. Gentle blood may be transmitted without goods enough to afford a reputably free consumption at one’s ease. Hence results a class of impecunious gentlemen of leisure, incidentally referred to already. These half-caste gentlemen of leisure fall into a system of hierarchical gradations. Those who stand near the higher and the highest grades of the wealthy leisure class, in point of birth, or in point of wealth, or both, outrank the remoterborn and the pecuniarily weaker. These lower grades, especially the impecunious, or marginal, gentlemen of leisure, affiliate themselves by a system of dependence or fealty to the great ones; by so doing they gain an increment of repute, or of the means with which to lead a life of leisure, from their patron. They become his courtiers or retainers, servants; and being fed and countenanced by their patron they are indices of his rank and vicarious consumer of his superfluous wealth. Many of these affiliated gentlemen of leisure are at the same time lesser men of substance in their own right; so that some of them are scarcely at all, others only partially, to be rated as vicarious consumers. So many of them, however, as make up the retainer and hangers-on of the patron may be classed as vicarious consumer without qualification. Many of these again, and also many of the other aristocracy of less degree, have in turn attached to their persons a more or less comprehensive group of vicarious consumer in the persons of their wives and children, their servants, retainers, etc.
Throughout this graduated scheme of vicarious leisure and vicarious consumption the rule holds that these offices must be performed in some such manner, or under some such circumstance or insignia, as shall point plainly to the master to whom this leisure or consumption pertains, and to whom therefore the resulting increment of good repute of right inures. The consumption and leisure executed by these persons for their master or patron represents an investment on his part with a view to an increase of good fame. As regards feasts and largesses this is obvious enough, and the imputation of repute to the host or patron here takes place immediately, on the ground of common notoriety . Where leisure and consumption is performed vicariously by henchmen and retainers, imputation of the resulting repute to the patron is effected by their residing near his person so that it may be plain to all men from what source they draw. As the group whose good esteem is to be secured in this way grows larger, more patent means are required to indicate the imputation of merit for the leisure performed, and to this end uniforms, badges, and liveries come into vogue. The wearing of uniforms or liveries implies a considerable degree of dependence, and may even be said to be a mark of servitude, real or ostensible. The wearers of uniforms and liveries may be roughly divided into two classes-the free and the servile, or the noble and the ignoble. The services performed by them are likewise divisible into noble and ignoble. Of course the distinction is not observed with strict consistency in practice; the less debasing of the base services and the less honorific of the noble functions are not infrequently merged in the same person. But the general distinction is not on that account to be overlooked. What may add some perplexity is the fact that this fundamental distinction between noble and ignoble, which rests on the nature of the ostensible service performed, is traversed by a secondary distinction into honorific and humiliating, resting on the rank of the person for whom the service is performed or whose livery is worn. So, those offices which are by right the proper employment of the leisure class are noble; such as government, fighting, hunting, the care of arms and accoutrements, and the like — in short, those which may be classed as ostensibly predatory employments. On the other hand, those employments which properly fall to the industrious class are ignoble; such as handicraft or other productive labor, menial services and the like. But a base service performed for a person of very high degree may become a very honorific office; as for instance the office of a Maid of Honor or of a Lady in Waiting to the Queen, or the King’s Master of the Horse or his Keeper of the Hounds. The two offices last named suggest a principle of some general bearing. Whenever, as in these cases, the menial service in question has to do directly with the primary leisure employments of fighting and hunting, it easily acquires a reflected honorific character. In this way great honor may come to attach to an employment which in its own nature belongs to the baser sort. In the later development of peaceable industry, the usage of employing an idle corps of uniformed men-at-arms gradually lapses. Vicarious consumption by dependents bearing the insignia of their patron or master narrows down to a corps of liveried menials. In a heightened degree, therefore, the livery comes to be a badge of servitude, or rather servility. Something of a honorific character always attached to the livery of the armed retainer, but this honorific character disappears when the livery becomes the exclusive badge of the menial. The livery becomes obnoxious to nearly all who are required to wear it. We are yet so little removed from a state of effective slavery as still to be fully sensitive to the sting of any imputation of servility. This antipathy asserts itself even in the case of the liveries or uniforms which some corporations prescribe as the distinctive dress of their employees. In this country the aversion even goes the length of discrediting — in a mild and uncertain way — those government employments, military and civil, which require the wearing of a livery or uniform.

# h1
## h2
### h3
#### h4
##### h5
###### h6

With the disappearance of servitude, the number of vicarious consumers attached to any one gentleman tends, on the whole, to decrease. The like is of course true, and perhaps in a still higher degree, of the number of dependents who perform vicarious leisure for him. In a general way, though not wholly nor consistently, these two groups coincide. The dependent who was first delegated for these duties was the wife, or the chief wife; and, as would be expected, in the later development of the institution, when the number of persons by whom these duties are customarily performed gradually narrows, the wife remains the last. In the higher grades of society a large volume of both these kinds of service is required; and here the wife is of course still assisted in the work by a more or less numerous corps of menials. But as we descend the social scale, the point is presently reached where the duties of vicarious leisure and consumption devolve upon the wife alone. In the communities of the Western culture, this point is at present found among the lower middle class.

## Curious Inversion

And here occurs a curious inversion. It is a fact of common observance that in this lower middle class there is no pretense of leisure on the part of the head of the household. Through force of circumstances it has fallen into disuse. But the middle-class wife still carries on the business of vicarious leisure, for the good name of the household and its master. In descending the social scale in any modern industrial community, the primary fact-the conspicuous leisure of the master of the household-disappears at a relatively high point. The head of the middle-class household has been reduced by economic circumstances to turn his hand to gaining a livelihood by occupations which often partake largely of the character of industry, as in the case of the ordinary business man of today. But the derivative fact-the vicarious leisure and consumption rendered by the wife, and the auxiliary vicarious performance of leisure by menials-remains in vogue as a conventionality which the demands of reputability will not suffer to be slighted. It is by no means an uncommon spectacle to find a man applying himself to work with the utmost assiduity, in order that his wife may in due form render for him that degree of vicarious leisure which the common sense of the time demands.

The leisure rendered by the wife in such cases is, of course, not a simple manifestation of idleness or indolence. It almost invariably occurs disguised under some form of work or household duties or social amenities, which prove on analysis to serve little or no ulterior end beyond showing that she does not occupy herself with anything that is gainful or that is of substantial use. As has already been noticed under the head of manners, the greater part of the customary round of domestic cares to which the middle-class housewife gives her time and effort is of this character. Not that the results of her attention to household matters, of a decorative and mundificatory character, are not pleasing to the sense of men trained in middle-class proprieties; but the taste to which these effects of household adornment and tidiness appeal is a taste which has been formed under the selective guidance of a canon of propriety that demands just these evidences of wasted effort. The effects are pleasing to us chiefly because we have been taught to find them pleasing. There goes into these domestic duties much solicitude for a proper combination of form and color, and for other ends that are to be classed as aesthetic in the proper sense of the term; and it is not denied that effects having some substantial aesthetic value are sometimes attained. Pretty much all that is here insisted on is that, as regards these amenities of life, the housewife’s efforts are under the guidance of traditions that have been shaped by the law of conspicuously wasteful expenditure of time and substance. If beauty or comfort is achieved-and it is a more or less fortuitous circumstance if they are-they must be achieved by means and methods that commend themselves to the great economic law of wasted effort. The more reputable, “presentable” portion of middle-class household paraphernalia are, on the one hand, items of conspicuous consumption, and on the other hand, apparatus for putting in evidence the vicarious leisure rendered by the housewife.

The requirement of vicarious consumption at the hands of the wife continues in force even at a lower point in the pecuniary scale than the requirement of vicarious leisure. At a point below which little if any pretense of wasted effort, in ceremonial cleanness and the like, is observable, and where there is assuredly no conscious attempt at ostensible leisure, decency still requires the wife to consume some goods conspicuously for the reputability of the household and its head. So that, as the latterday outcome of this evolution of an archaic institution, the wife, who was at the outset the drudge and chattel of the man, both in fact and in theory — the producer of goods for him to consume — has become the ceremonial consumer of goods which he produces. But she still quite unmistakably remains his chattel in theory; for the habitual rendering of vicarious leisure and consumption is the abiding mark of the unfree servant.

This vicarious consumption practiced by the household of the middle and lower classes can not be counted as a direct expression of the leisure-class scheme of life, since the household of this pecuniary grade does not belong within the leisure class. It is rather that the leisure-class scheme of life here comes to an expression at the second remove. The leisure class stands at the head of the social structure in point of reputability; and its manner of life and its standards of worth therefore afford the norm of reputability for the community. The observance of these standards, in some degree of approximation, becomes incumbent upon all classes lower in the scale. In modern civilized communities the lines of demarcation between social classes have grown vague and transient, and wherever this happens the norm of reputability imposed by the upper class extends its coercive influence with but slight hindrance down through the social structure to the lowest strata. The result is that the members of each stratum accept as their ideal of decency the scheme of life in vogue in the next higher stratum, and bend their energies to live up to that ideal. On pain of forfeiting their good name and their selfrespect in case of failure, they must conform to the accepted code, at least in appearance. The basis on which good repute in any highly organized industrial community ultimately rests is pecuniary strength; and the means of showing pecuniary strength, and so of gaining or retaining a good name, are leisure and a conspicuous consumption of goods. Accordingly, both of these methods are in vogue as far down the scale as it remains possible; and in the lower strata in which the two methods are employed, both offices are in great part delegated to the wife and children of the household. Lower still, where any degree of leisure, even ostensible, has become impracticable for the wife, the conspicuous consumption of goods remains and is carried on by the wife and children. The man of the household also can do something in this direction, and indeed, he commonly does; but with a still lower descent into the levels of indigence — along the margin of the slums — the man, and presently also the children, virtually cease to consume valuable goods for appearances, and the woman remains virtually the sole exponent of the household’s pecuniary decency. No class of society, not even the most abjectly poor, forgoes all customary conspicuous consumption. The last items of this category of consumption are not given up except under stresS of the direst necessity. Very much of squalor and discomfort will be endured before the last trinket or the last pretense of pecuniary decency is put away. There is no class and no country that has yielded so abjectly before the pressure of physical want as to deny themselves all gratification of this higher or spiritual need.

From the foregoing survey of the growth of conspicuous leisure and consumption, it appears that the utility of both alike for the purposes of reputability lies in the element of waste that is common to both. In the one case it is a waste of time and effort, in the other it is a waste of goods. Both are methods of demonstrating the possession of wealth, and the two are conventionally accepted as equivalents. The choice between them is a question of advertising expediency simply, except so far as it may be affected by other standards of propriety, springing from a different source. On grounds of expediency the preference may be given to the one or the other at different stages of the economic development. The question is, which of the two methods will most effectively reach the persons whose convictions it is desired to affect. Usage has answered this question in different ways under different circumstances.

So long as the community or social group is small enough and compact enough to be effectually reached by common notoriety alone that is to say, so long as the human environment to which the individual is required to adapt himself in respect of reputability is comprised within his sphere of personal acquaintance and neighborhood gossip — so long the one method is about as effective as the other. Each will therefore serve about equally well during the earlier stages of social growth. But when the differentiation has gone farther and it becomes necessary to reach a wider human environment, consumption begins to hold over leisure as an ordinary means of decency. This is especially true during the later, peaceable economic stage. The means of communication and the mobility of the population now expose the individual to the observation of many persons who have no other means of judging of his reputability than the display of goods (and perhaps of breeding) which he is able to make while he is under their direct observation. The modern organization of industry works in the same direction also by another line. The exigencies of the modern industrial system frequently place individuals and households in juxtaposition between whom there is little contact in any other sense than that of juxtaposition. One’s neighbors, mechanically speaking, often are socially not one’s neighbors, or even acquaintances; and still their transient good opinion has a high degree of utility. The only practicable means of impressing one’s pecuniary ability on these unsympathetic observers of one’s everyday life is an unremitting demonstration of ability to pay. In the modern community there is also a more frequent attendance at large gatherings of people to whom one’s everyday life is unknown; in such places as churches, theaters, ballrooms, hotels, parks, shops, and the like. In order to impress these transient observers, and to retain one’s self-complacency under their observation, the signature of one’s pecuniary strength should be written in characters which he who runs may read. It is evident, therefore, that the present trend of the development is in the direction of heightening the utility of conspicuous consumption as compared with leisure.

It is also noticeable that the serviceability of consumption as a means of repute, as well as the insistence on it as an element of decency, is at its best in those portions of the community where the human contact of the individual is widest and the mobility of the population is greatest. Conspicuous consumption claims a relatively larger portion of the income of the urban than of the rural population, and the claim is also more imperative. The result is that, in order to keep up a decent appearance, the former habitually live hand-to-mouth to a greater extent than the latter. So it comes, for instance, that the American farmer and his wife and daughters are notoriously less modish in their dress, as well as less urbane in their manners, than the city artisan’s family with an equal income. It is not that the city population is by nature much more eager for the peculiar complacency that comes of a conspicuous consumption, nor has the rural population less regard for pecuniary decency. But the provocation to this line of evidence, as well as its transient effectiveness, is more decided in the city. This method is therefore more readily resorted to, and in the struggle to outdo one another the city population push their normal standard of conspicuous consumption to a higher point, with the result that a relatively greater expenditure in this direction is required to indicate a given degree of pecuniary decency in the city. The requirement of conformity to this higher conventional standard becomes mandatory. The standard of decency is higher, class for class, and this requirement of decent appearance must be lived up to on pain of losing caste.

Consumption becomes a larger element in the standard of living in the city than in the country. Among the country population its place is to some extent taken by savings and home comforts known through the medium of neighborhood gossip sufficiently to serve the like general purpose of Pecuniary repute. These home comforts and the leisure indulged in — where the indulgence is found — are of course also in great part to be classed as items of conspicuous consumption; and much the same is to be said of the savings. The smaller amount of the savings laid by by the artisan class is no doubt due, in some measure, to the fact that in the case of the artisan the savings are a less effective means of advertisement, relative to the environment in which he is placed, than are the savings of the people living on farms and in the small villages. Among the latter, everybody’s affairs, especially everybody’s pecuniary status, are known to everybody else. Considered by itself simply — taken in the first degree — this added provocation to which the artisan and the urban laboring classes are exposed may not very seriously decrease the amount of savings; but in its cumulative action, through raising the standard of decent expenditure, its deterrent effect on the tendency to save cannot but be very great.

A felicitous illustration of the manner in which this canon of reputability works out its results is seen in the practice of dram-drinking, “treating,” and smoking in public places, which is customary among the laborers and handicraftsmen of the towns, and among the lower middle class of the urban population generally Journeymen printers may be named as a class among whom this form of conspicuous consumption has a great vogue, and among whom it carries with it certain well-marked consequences that are often deprecated. The peculiar habits of the class in this respect are commonly set down to some kind of an ill-defined moral deficiency with which this class is credited, or to a morally deleterious influence which their occupation is supposed to exert, in some unascertainable way, upon the men employed in it. The state of the case for the men who work in the composition and press rooms of the common run of printing-houses may be summed up as follows. Skill acquired in any printing-house or any city is easily turned to account in almost any other house or city; that is to say, the inertia due to special training is slight. Also, this occupation requires more than the average of intelligence and general information, and the men employed in it are therefore ordinarily more ready than many others to take advantage of any slight variation in the demand for their labor from one place to another. The inertia due to the home feeling is consequently also slight. At the same time the wages in the trade are high enough to make movement from place to place relatively easy. The result is a great mobility of the labor employed in printing; perhaps greater than in any other equally well-defined and considerable body of workmen. These men are constantly thrown in contact with new groups of acquaintances, with whom the relations established are transient or ephemeral, but whose good opinion is valued none the less for the time being. The human proclivity to ostentation, reenforced by sentiments of goodfellowship, leads them to spend freely in those directions which will best serve these needs. Here as elsewhere prescription seizes upon the custom as soon as it gains a vogue, and incorporates it in the accredited standard of decency. The next step is to make this standard of decency the point of departure for a new move in advance in the same direction — for there is no merit in simple spiritless conformity to a standard of dissipation that is lived up to as a matter of course by everyone in the trade.

The greater prevalence of dissipation among printers than among the average of workmen is accordingly attributable, at least in some measure, to the greater ease of movement and the more transient character of acquaintance and human contact in this trade. But the substantial ground of this high requirement in dissipation is in the last analysis no other than that same propensity for a manifestation of dominance and pecuniary decency which makes the French peasant-proprietor parsimonious and frugal, and induces the American millionaire to found colleges, hospitals and museums. If the canon of conspicuous consumption were not offset to a considerable extent by other features of human nature, alien to it, any saving should logically be impossible for a population situated as the artisan and laboring classes of the cities are at present, however high their wages or their income might be. But there are other standards of repute and other, more or less imperative, canons of conduct, besides wealth and its manifestation, and some of these come in to accentuate or to qualify the broad, fundamental canon of conspicuous waste. Under the simple test of effectiveness for advertising, we should expect to find leisure and the conspicuous consumption of goods dividing the field of pecuniary emulation pretty evenly between them at the outset. Leisure might then be expected gradually to yield ground and tend to obsolescence as the economic development goes forward, and the community increases in size; while the conspicuous consumption of goods should gradually gain in importance, both absolutely and relatively, until it had absorbed all the available product, leaving nothing over beyond a bare livelihood. But the actual course of development has been somewhat different from this ideal scheme. Leisure held the first place at the start, and came to hold a rank very much above wasteful consumption of goods, both as a direct exponent of wealth and as an element in the standard of decency , during the quasi-peaceable culture. From that point onward, consumption has gained ground, until, at present, it unquestionably holds the primacy, though it is still far from absorbing the entire margin of production above the subsistence minimum.

The early ascendency of leisure as a means of reputability is traceable to the archaic distinction between noble and ignoble employments. Leisure is honorable and becomes imperative partly because it shows exemption from ignoble labor. The archaic differentiation into noble and ignoble classes is based on an invidious distinction between employments as honorific or debasing; and this traditional distinction grows into an imperative canon of decency during the early quasi-peaceable stage. Its ascendency is furthered by the fact that leisure is still fully as effective an evidence of wealth as consumption. Indeed, so effective is it in the relatively small and stable human environment to which the individual is exposed at that cultural stage, that, with the aid of the archaic tradition which deprecates all productive labor, it gives rise to a large impecunious leisure class, and it even tends to limit the production of the community’s industry to the subsistence minimum. This extreme inhibition of industry is avoided because slave labor, working under a compulsion more vigorous than that of reputability, is forced to turn out a product in excess of the subsistence minimum of the working class. The subsequent relative decline in the use of conspicuous leisure as a basis of repute is due partly to an increasing relative effectiveness of consumption as an evidence of wealth; but in part it is traceable to another force, alien, and in some degree antagonistic, to the usage of conspicuous waste.

This alien factor is the instinct of workmanship. Other circumstances permitting, that instinct disposes men to look with favor upon productive efficiency and on whatever is of human use. It disposes them to depreCate waste of substance or effort. The instinct of workmanship is present in all men, and asserts itself even under very adverse circumstances. So that however wasteful a given expenditure may be in reality, it must at least have some colorable excuse in the way of an ostensible purpose. The manner in which, under special circumstances, the instinct eventuates in a taste for exploit and an invidious discrimination between noble and ignoble classes has been indicated in an earlier chapter. In so far as it comes into conflict with the law of conspicuous waste, the instinct of workmanship expresses itself not so much in insistence on substantial usefulness as in an abiding sense of the odiousness and aesthetic impossibility of what is obviously futile. Being of the nature of an instinctive affection, its guidance touches chiefly and immediately the obvious and apparent violations of its requirements. It is only less promptly and with less constraining force that it reaches such substantial violations of its requirements as are appreciated only upon reflection.

So long as all labor continues to be performed exclusively or usually by slaves, the baseness of all productive effort is too constantly and deterrently present in the mind of men to allow the instinct of workmanship seriously to take effect in the direction of industrial usefulness; but when the quasi-peaceable stage (with slavery and status) passes into the peaceable stage of industry (with wage labor and cash payment) the instinct comes more effectively into play. It then begins aggressively to shape men’s views of what is meritorious, and asserts itself at least as an auxiliary canon of self-complacency. All extraneous considerations apart, those persons (adult) are but a vanishing minority today who harbor no inclination to the accomplishment of some end, or who are not impelled of their own motion to shape some object or fact or relation for human use. The propensity may in large measure be overborne by the more immediately constraining incentive to a reputable leisure and an avoidance of indecorous usefulness, and it may therefore work itself out in make-believe only; as for instance in “social duties,” and in quasi-artistic or quasi-scholarly accomplishments, in the care and decoration of the house, in sewingcircle activity or dress reform, in proficiency at dress, cards, yachting, golf, and various sports. But the fact that it may under stress of circumstances eventuate in inanities no more disproves the presence of the instinct than the reality of the brooding instinct is disproved by inducing a hen to sit on a nestful of china eggs.

This latter-day uneasy reaching-out for some form of purposeful activity that shall at the same time not be indecorously productive of either individual or collective gain marks a difference of attitude between the modern leisure class and that of the quasi-peaceable stage. At the earlier stage, as was said above, the all-dominating institution of slavery and status acted resistlessly to discountenance exertion directed to other than naively predatory ends. It was still possible to find some habitual employment for the inclination to action in the way of forcible aggression or repression directed against hostile groups or against the subject classes within the group; and this sewed to relieve the pressure and draw off the energy of the leisure class without a resort to actually useful, or even ostensibly useful employments. The practice of hunting also sewed the same purpose in some degree. When the community developed into a peaceful industrial organization, and when fuller occupation of the land had reduced the opportunities for the hunt to an inconsiderable residue, the pressure of energy seeking purposeful employment was left to find an outlet in some other direction. The ignominy which attaches to useful effort also entered upon a less acute phase with the disappearance of compulsory labor; and the instinct of workmanship then came to assert itself with more persistence and consistency.

The line of least resistance has changed in some measure, and the energy which formerly found a vent in predatory activity, now in part takes the direction of some ostensibly useful end. Ostensibly purposeless leisure has come to be deprecated, especially among that large portion of the leisure class whose plebeian origin acts to set them at variance with the tradition of the otium cum dignitate. But that canon of reputability which discountenances all employment that is of the nature of productive effort is still at hand, and will permit nothing beyond the most transient vogue to any employment that is substantially useful or productive. The consequence is that a change has been wrought in the conspicuous leisure practiced by the leisure class; not so much in substance as in form. A reconciliation between the two conflicting requirements is effected by a resort to make-believe. Many and intricate polite observances and social duties of a ceremonial nature are developed; many organizations are founded, with some specious object of amelioration embodied in their official style and title; there is much coming and going, and a deal of talk, to the end that the talkers may not have occasion to reflect on what is the effectual economic value of their traffic. And along with the make-believe of purposeful employment, and woven inextricably into its texture, there is commonly, if not invariably, a more or less appreciable element of purposeful effort directed to some serious end.

In the narrower sphere of vicarious leisure a similar change has gone forward. Instead of simply passing her time in visible idleness, as in the best days of the patriarchal regime, the housewife of the advanced peaceable stage applies herself assiduously to household cares. The salient features of this development of domestic service have already been indicated. Throughout the entire evolution of conspicuous expenditure, whether of goods or of services or human life, runs the obvious implication that in order to effectually mend the consumer’s good fame it must be an expenditure of superfluities. In order to be reputable it must be wasteful. No merit would accrue from the consumption of the bare necessaries of life, except by comparison with the abjectly poor who fall short even of the subsistence minimum; and no standard of expenditure could result from such a comparison, except the most prosaic and unattractive level of decency. A standard of life would still be possible which should admit of invidious comparison in other respects than that of opulence; as, for instance, a comparison in various directions in the manifestation of moral, physical, intellectual, or aesthetic force. Comparison in all these directions is in vogue today; and the comparison made in these respects is commonly so inextricably bound up with the pecuniary comparison as to be scarcely distinguishable from the latter. This is especially true as regards the current rating of expressions of intellectual and aesthetic force or proficiency’ so that we frequently interpret as aesthetic or intellectual a difference which in substance is pecuniary only.

The use of the term “waste” is in one respect an unfortunate one. As used in the speech of everyday life the word carries an undertone of deprecation. It is here used for want of a better term that will adequately describe the same range of motives and of phenomena, and it is not to be taken in an odious sense, as implying an illegitimate expenditure of human products or of human life. In the view of economic theory the expenditure in question is no more and no less legitimate than any other expenditure. It is here called “waste” because this expenditure does not serve human life or human well-being on the whole, not because it is waste or misdirection of effort or expenditure as viewed from the standpoint of the individual consumer who chooses it. If he chooses it, that disposes of the question of its relative utility to him, as compared with other forms of consumption that would not be deprecated on account of their wastefulness. Whatever form of expenditure the consumer chooses, or whatever end he seeks in making his choice, has utility to him by virtue of his preference. As seen from the point of view of the individual consumer, the question of wastefulness does not arise within the scope of economic theory proper. The use of the word “waste” as a technical term, therefore, implies no deprecation of the motives or of the ends sought by the consumer under this canon of conspicuous waste.

But it is, on other grounds, worth noting that the term “waste” in the language of everyday life implies deprecation of what is characterized as wasteful. This common-sense implication is itself an outcropping of the instinct of workmanship. The popular reprobation of waste goes to say that in order to be at peace with himself the common man must be able to see in any and all human effort and human enjoyment an enhancement of life and wellbeing on the whole. In order to meet with unqualified approval, any economic fact must approve itself under the test of impersonal usefulness-usefulness as seen from the point of view of the generically human. Relative or competitive advantage of one individual in comparison with another does not satisfy the economic conscience, and therefore competitive expenditure has not the approval of this conscience.

In strict accuracy nothing should be included under the head of conspicuous waste but such expenditure as is incurred on the ground of an invidious pecuniary comparison. But in order to bring any given item or element in under this head it is not necessary that it should be recognized as waste in this sense by the person incurring the expenditure. It frequently happens that an element of the standard of living which set out with being primarily wasteful, ends with becoming, in the apprehension of the consumer, a necessary of life; and it may in this way become as indispensable as any other item of the consumer’s habitual expenditure. As items which sometimes fall under this head, and are therefore available as illustrations of the manner in which this principle applies, may be cited carpets and tapestries, silver table service, waiter’s services, silk hats, starched linen, many articles of jewelry and of dress. The indispensability of these things after the habit and the convention have been formed, however, has little to say in the classification of expenditures as waste or not waste in the technical meaning of the word. The test to which all expenditure must be brought in an attempt to decide that point is the question whether it serves directly to enhance human life on the whole-whether it furthers the life process taken impersonally. For this is the basis of award of the instinct of workmanship, and that instinct is the court of final appeal in any question of economic truth or adequacy. It is a question as to the award rendered by a dispassionate common sense. The question is, therefore, not whether, under the existing circumstances of individual habit and social custom, a given expenditure conduces to the particular consumer’s gratification or peace of mind; but whether, aside from acquired tastes and from the canons of usage and conventional decency, its result is a net gain in comfort or in the fullness of life. Customary expenditure must be classed under the head of waste in so far as the custom on which it rests is traceable to the habit of making an invidious pecuniary comparison-in so far as it is conceived that it could not have become customary and prescriptive without the backing of this principle of pecuniary reputability or relative economic success. It is obviously not necessary that a given object of expenditure should be exclusively wasteful in order to come in under the category of conspicuous waste. An article may be useful and wasteful both, aud its utility to the consumer may be made up of use and waste in the most varying proportions. Consumable goods, and even productive goods, generally show the two elements in combination, as constituents of their utility; although, in a general way, the element of waste tends to predominate in articles of consumption, while the contrary is true of articles designed for productive use. Even in articles which appear at first glance to serve for pure ostentation only, it is always possible to detect the presence of some, at least ostensible, useful purpose; and on the other hand, even in special machinery and tools contrived for some particular industrial process, as well as in the rudest appliances of human industry, the traces of conspicuous waste, or at least of the habit of ostentation, usually become evident on a close scrutiny. It would be hazardous to assert that a useful purpose is ever absent from the utility of any article or of any service, however obviously its prime purpose and chief element is conspicuous waste; and it would be only less hazardous to assert of any primarily useful product that the element of waste is in no way concerned in its value, immediately or remotely.',
`,
              },
            ],
          },
        ],
      },
    }),
  };

  plugins = [PluginInsertBlockOnEnter({ object: 'block', type: 'line', nodes: [] })];

  onChange = ({ value }) => {
    this.setState({ value });
  };

  renderBlock = (props, editor, next) => {
    const { attributes, children, node } = props;

    switch (node.type) {
      case 'line':
        return (
          <p className={STYLES_EDITOR_LINE} {...attributes}>
            {children}
          </p>
        );
      default:
        return next();
    }
  };

  render() {
    const plainString = Plain.serialize(this.state.value);

    return (
      <PageLayout
        leftElement={<PageNavigation />}
        headerElement={<div className={STYLES_HEADER}>Download Castle | Windows | MacOS</div>}>
        <div className={STYLES_ROOT}>
          <div className={STYLES_ROOT_LEFT}>
            <div className={STYLES_LAYOUT}>
              <h1 className={STYLES_POST_TITLE} style={{ marginBottom: 0 }}>
                The Uniting Of The Tribes
              </h1>
              <div className={STYLES_BYLINE}>
                <span
                  className={STYLES_AVATAR}
                  style={{ backgroundImage: `url(/static/avatar-author.png)` }}
                />
                <span className={STYLES_BYLINE_TEXT}>
                  <strong>Tiffany Zhong</strong> — August 14th, 2019 — Posted in{' '}
                  <a href="#">News</a>
                </span>
              </div>
              <div>
                <ReactMarkdown
                  source={plainString}
                  disallowedTypes={disallowedTypes}
                  plugins={[MarkdownPluginBreaks]}
                />
              </div>
            </div>
          </div>
          <div className={STYLES_ROOT_RIGHT}>
            <div className={STYLES_ROOT_RIGHT_TOP}>
              <span className={STYLES_LINK}>Save</span>
              <span className={STYLES_LINK}>Cancel</span>
            </div>
            <div className={STYLES_ROOT_RIGHT_CONTENT}>
              <Editor
                spellCheck
                autoFocus
                placeholder="Start typing..."
                value={this.state.value}
                onChange={this.onChange}
                renderBlock={this.renderBlock}
              />
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }
}
