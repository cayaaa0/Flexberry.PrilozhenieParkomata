﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Prilozhenie_parkomata
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Паркомат.
    /// </summary>
    // *** Start programmer edit section *** (Паркомат CustomAttributes)

    // *** End programmer edit section *** (Паркомат CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПаркоматE", new string[] {
            "Адрес as \'Адрес\'",
            "НомерПарк as \'Номер парк\'",
            "Шлагбаум as \'Шлагбаум\'",
            "Шлагбаум.Адрес as \'Адрес\'",
            "Терминал as \'Терминал\'",
            "Терминал.Адрес as \'Адрес\'",
            "Услуга as \'Услуга\'",
            "Услуга.Длительность as \'Длительность\'"}, Hidden=new string[] {
            "Шлагбаум.Адрес",
            "Терминал.Адрес",
            "Услуга.Длительность"})]
    [MasterViewDefineAttribute("ПаркоматE", "Шлагбаум", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Адрес")]
    [MasterViewDefineAttribute("ПаркоматE", "Терминал", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Адрес")]
    [MasterViewDefineAttribute("ПаркоматE", "Услуга", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Длительность")]
    public class Паркомат : ICSSoft.STORMNET.DataObject
    {
        
        private string fАдрес;
        
        private int fНомерПарк;
        
        private IIS.Prilozhenie_parkomata.Шлагбаум fШлагбаум;
        
        private IIS.Prilozhenie_parkomata.Терминал fТерминал;
        
        private IIS.Prilozhenie_parkomata.Услуга fУслуга;
        
        private IIS.Prilozhenie_parkomata.Парковка fПарковка;
        
        // *** Start programmer edit section *** (Паркомат CustomMembers)

        // *** End programmer edit section *** (Паркомат CustomMembers)

        
        /// <summary>
        /// Адрес.
        /// </summary>
        // *** Start programmer edit section *** (Паркомат.Адрес CustomAttributes)

        // *** End programmer edit section *** (Паркомат.Адрес CustomAttributes)
        [StrLen(255)]
        public virtual string Адрес
        {
            get
            {
                // *** Start programmer edit section *** (Паркомат.Адрес Get start)

                // *** End programmer edit section *** (Паркомат.Адрес Get start)
                string result = this.fАдрес;
                // *** Start programmer edit section *** (Паркомат.Адрес Get end)

                // *** End programmer edit section *** (Паркомат.Адрес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Паркомат.Адрес Set start)

                // *** End programmer edit section *** (Паркомат.Адрес Set start)
                this.fАдрес = value;
                // *** Start programmer edit section *** (Паркомат.Адрес Set end)

                // *** End programmer edit section *** (Паркомат.Адрес Set end)
            }
        }
        
        /// <summary>
        /// НомерПарк.
        /// </summary>
        // *** Start programmer edit section *** (Паркомат.НомерПарк CustomAttributes)

        // *** End programmer edit section *** (Паркомат.НомерПарк CustomAttributes)
        public virtual int НомерПарк
        {
            get
            {
                // *** Start programmer edit section *** (Паркомат.НомерПарк Get start)

                // *** End programmer edit section *** (Паркомат.НомерПарк Get start)
                int result = this.fНомерПарк;
                // *** Start programmer edit section *** (Паркомат.НомерПарк Get end)

                // *** End programmer edit section *** (Паркомат.НомерПарк Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Паркомат.НомерПарк Set start)

                // *** End programmer edit section *** (Паркомат.НомерПарк Set start)
                this.fНомерПарк = value;
                // *** Start programmer edit section *** (Паркомат.НомерПарк Set end)

                // *** End programmer edit section *** (Паркомат.НомерПарк Set end)
            }
        }
        
        /// <summary>
        /// Паркомат.
        /// </summary>
        // *** Start programmer edit section *** (Паркомат.Терминал CustomAttributes)

        // *** End programmer edit section *** (Паркомат.Терминал CustomAttributes)
        [PropertyStorage(new string[] {
                "Терминал"})]
        [NotNull()]
        public virtual IIS.Prilozhenie_parkomata.Терминал Терминал
        {
            get
            {
                // *** Start programmer edit section *** (Паркомат.Терминал Get start)

                // *** End programmer edit section *** (Паркомат.Терминал Get start)
                IIS.Prilozhenie_parkomata.Терминал result = this.fТерминал;
                // *** Start programmer edit section *** (Паркомат.Терминал Get end)

                // *** End programmer edit section *** (Паркомат.Терминал Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Паркомат.Терминал Set start)

                // *** End programmer edit section *** (Паркомат.Терминал Set start)
                this.fТерминал = value;
                // *** Start programmer edit section *** (Паркомат.Терминал Set end)

                // *** End programmer edit section *** (Паркомат.Терминал Set end)
            }
        }
        
        /// <summary>
        /// Паркомат.
        /// </summary>
        // *** Start programmer edit section *** (Паркомат.Услуга CustomAttributes)

        // *** End programmer edit section *** (Паркомат.Услуга CustomAttributes)
        [PropertyStorage(new string[] {
                "Услуга"})]
        [NotNull()]
        public virtual IIS.Prilozhenie_parkomata.Услуга Услуга
        {
            get
            {
                // *** Start programmer edit section *** (Паркомат.Услуга Get start)

                // *** End programmer edit section *** (Паркомат.Услуга Get start)
                IIS.Prilozhenie_parkomata.Услуга result = this.fУслуга;
                // *** Start programmer edit section *** (Паркомат.Услуга Get end)

                // *** End programmer edit section *** (Паркомат.Услуга Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Паркомат.Услуга Set start)

                // *** End programmer edit section *** (Паркомат.Услуга Set start)
                this.fУслуга = value;
                // *** Start programmer edit section *** (Паркомат.Услуга Set end)

                // *** End programmer edit section *** (Паркомат.Услуга Set end)
            }
        }
        
        /// <summary>
        /// Паркомат.
        /// </summary>
        // *** Start programmer edit section *** (Паркомат.Шлагбаум CustomAttributes)

        // *** End programmer edit section *** (Паркомат.Шлагбаум CustomAttributes)
        [PropertyStorage(new string[] {
                "Шлагбаум"})]
        [NotNull()]
        public virtual IIS.Prilozhenie_parkomata.Шлагбаум Шлагбаум
        {
            get
            {
                // *** Start programmer edit section *** (Паркомат.Шлагбаум Get start)

                // *** End programmer edit section *** (Паркомат.Шлагбаум Get start)
                IIS.Prilozhenie_parkomata.Шлагбаум result = this.fШлагбаум;
                // *** Start programmer edit section *** (Паркомат.Шлагбаум Get end)

                // *** End programmer edit section *** (Паркомат.Шлагбаум Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Паркомат.Шлагбаум Set start)

                // *** End programmer edit section *** (Паркомат.Шлагбаум Set start)
                this.fШлагбаум = value;
                // *** Start programmer edit section *** (Паркомат.Шлагбаум Set end)

                // *** End programmer edit section *** (Паркомат.Шлагбаум Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Prilozhenie_parkomata.Парковка.
        /// </summary>
        // *** Start programmer edit section *** (Паркомат.Парковка CustomAttributes)

        // *** End programmer edit section *** (Паркомат.Парковка CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Парковка"})]
        public virtual IIS.Prilozhenie_parkomata.Парковка Парковка
        {
            get
            {
                // *** Start programmer edit section *** (Паркомат.Парковка Get start)

                // *** End programmer edit section *** (Паркомат.Парковка Get start)
                IIS.Prilozhenie_parkomata.Парковка result = this.fПарковка;
                // *** Start programmer edit section *** (Паркомат.Парковка Get end)

                // *** End programmer edit section *** (Паркомат.Парковка Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Паркомат.Парковка Set start)

                // *** End programmer edit section *** (Паркомат.Парковка Set start)
                this.fПарковка = value;
                // *** Start programmer edit section *** (Паркомат.Парковка Set end)

                // *** End programmer edit section *** (Паркомат.Парковка Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПаркоматE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПаркоматE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПаркоматE", typeof(IIS.Prilozhenie_parkomata.Паркомат));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Паркомат.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfПаркомат CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfПаркомат CustomAttributes)
    public class DetailArrayOfПаркомат : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Prilozhenie_parkomata.DetailArrayOfПаркомат members)

        // *** End programmer edit section *** (IIS.Prilozhenie_parkomata.DetailArrayOfПаркомат members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Паркомат by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Паркомат.
        /// </summary>
        public DetailArrayOfПаркомат(IIS.Prilozhenie_parkomata.Парковка fПарковка) : 
                base(typeof(Паркомат), ((ICSSoft.STORMNET.DataObject)(fПарковка)))
        {
        }
        
        public IIS.Prilozhenie_parkomata.Паркомат this[int index]
        {
            get
            {
                return ((IIS.Prilozhenie_parkomata.Паркомат)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Prilozhenie_parkomata.Паркомат dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
